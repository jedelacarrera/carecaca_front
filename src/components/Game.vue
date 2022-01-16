<template>
  <div>
    <div class="row mb-4">
      <Player
        v-for="player in otherPlayers"
        :key="player.username"
        :username="player.username"
        :hand="player.hand"
        :hidden="player.hidden"
        :visible="player.visible"
        :turn="player.username === usernameTurn"
      />
    </div>
    <div v-if="started" class="table-center">
      <PlayedCards
        :amount="lastCard.amount"
        :rank="lastCard.rank"
        :suit="lastCard.suit"
        :total="playedCards.length"
      />
      <Deck :amount="deck" />
      <div v-if="finishedUsernames.length > 0" class="mr-4">
        <h2>Ganadores</h2>
        <p v-for="playerUsername in finishedUsernames" :key="playerUsername">
          {{ playerUsername }}
        </p>
      </div>
      <div>
        <p>
          {{ lastAction }}
        </p>
        <p>
          {{ lastLastAction }}
        </p>
      </div>
    </div>
    <div v-else class="table-center">
      <v-btn @click="$emit('start-game')">Repartir cartas</v-btn>
      <div class="ml-2 col">
        <p>
          {{ lastAction }}
        </p>
        <p>
          {{ lastLastAction }}
        </p>
      </div>
    </div>
    <div class="table-center">
      <Player
        v-if="currentPlayer"
        :username="username"
        :hand="currentPlayer.hand"
        :hidden="currentPlayer.hidden"
        :visible="currentPlayer.visible"
        :turn="username === usernameTurn"
        isCurrentPlayer
        @play-visible-cards="
          $emit('play-cards', { cards: $event, origin: 'visible' })
        "
        @play-visible-cards-or-take-played-cards="
          $emit('play-cards-or-take-play-cards', {
            cards: $event,
            origin: 'visible',
          })
        "
        @play-hidden-cards="
          $emit('play-cards', { cards: $event, origin: 'hidden' })
        "
        @play-hidden-cards-or-take-played-cards="
          $emit('play-cards-or-take-play-cards', {
            cards: $event,
            origin: 'hidden',
          })
        "
      />
      <HandCards
        v-if="currentPlayer"
        :cards="currentPlayer.hand"
        @play-cards="$emit('play-cards', { cards: $event, origin: 'hand' })"
        @take-played-cards="$emit('take-played-cards')"
        @take-played-cards-and-one="$emit('take-played-cards-and-one')"
      />
    </div>
    <!--
    <PlayedCards :amount="2" rank="Jkr" suit="wildcard" />
    <Card rank="Q" suit="club" cardBelow lg />
    <Card rank="Jkr" suit="diamond" />
    -->
  </div>
</template>

<script>
import Deck from '@/components/Deck'
import PlayedCards from '@/components/PlayedCards'
import Player from '@/components/Player'
import HandCards from '@/components/HandCards'
import { getLastCard } from '@/helpers/cards'

export default {
  props: {
    username: {
      type: String,
      default: '',
    },
    tableName: {
      type: String,
      default: '',
    },
    players: {
      type: Array,
      default: () => [],
    },
    started: {
      type: Boolean,
      default: false,
    },
    playedCards: {
      type: Array,
      default: () => [],
    },
    deck: {
      type: Number,
      default: 0,
    },
    usernameTurn: {
      type: String,
      default: '',
    },
    clockwise: {
      type: Boolean,
      default: true,
    },
    finishedUsernames: {
      type: Array,
      default: () => [],
    },
    lastAction: {
      type: String,
      default: '',
    },
    lastLastAction: {
      type: String,
      default: '',
    },
  },
  computed: {
    lastCard() {
      return getLastCard(this.playedCards)
    },
  },
  components: {
    Deck,
    PlayedCards,
    Player,
    HandCards,
  },
  data() {
    const currentPlayerIndex = this.players.findIndex(
      player => player.username === this.username,
    )

    if (currentPlayerIndex === -1) {
      return { currentPlayer: null, otherPlayers: this.players }
    }
    const otherPlayers = this.players.filter(
      player => player.username !== this.username,
    )
    for (let i = 0; i < currentPlayerIndex; i++) {
      otherPlayers.push(otherPlayers.shift())
    }

    return {
      currentPlayer: this.players[currentPlayerIndex],
      otherPlayers,
    }
  },
}
</script>
<style>
.table-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
