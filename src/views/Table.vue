<template>
  <div class="home">
    <Game
      :key="key"
      :username="username"
      :tableName="tableName"
      :players="players"
      :started="started"
      :playedCards="playedCards"
      :deck="deck"
      :usernameTurn="usernameTurn"
      :clockwise="clockwise"
      :finishedUsernames="finishedUsernames"
      :lastAction="lastAction"
      :lastLastAction="lastLastAction"
      @play-cards="genPlayCards($event.cards, $event.origin)"
      @take-played-cards="genTakePlayedCards()"
      @play-cards-or-take-play-cards="
        genPlayCardsOrTakePlayedCards($event.cards, $event.origin)
      "
      @table-status="genTableStatus()"
      @start-game="genStartGame()"
    />
    <v-dialog v-model="showDialog" max-width="300px">
      <v-card>
        <v-card-title>
          {{ errorMessage }}
        </v-card-title>
        <v-card-actions>
          <v-btn color="primary" text @click="showDialog = false">
            Ok, cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Game from '@/components/Game'
import {
  getTable,
  login,
  playCards,
  takePlayedCards,
  playCardsOrTakePlayedCards,
  startTable,
} from '@/helpers/api'

export default {
  data() {
    return {
      players: [],
      started: false,
      playedCards: [],
      deck: 0,
      usernameTurn: null,
      clockwise: true,
      finishedUsernames: [],
      key: '',
      errorMessage: '',
      showDialog: false,
      lastAction: '',
      lastLastAction: '',
    }
  },
  computed: {
    username() {
      return this.$route.query.username || 'yo'
    },
    tableName() {
      return this.$route.query.table || 'mi_mesa'
    },
  },
  created() {
    login(this.tableName, this.username).then(this.assignResponseToData)
    const channel = this.$pusher.subscribe('carecaca')
    channel.bind(this.tableName, event => {
      console.log(event)
      this.lastLastAction = this.lastAction
      this.lastAction = event
      this.genTableStatus()
    })
  },
  components: {
    Game,
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    genTableStatus() {
      getTable(this.tableName).then(this.assignResponseToData)
    },
    genPlayCards(cards, origin) {
      playCards(this.tableName, this.username, cards, origin).then(
        this.assignResponseToData,
      )
    },
    genPlayCardsOrTakePlayedCards(cards, origin) {
      playCardsOrTakePlayedCards(
        this.tableName,
        this.username,
        cards,
        origin,
      ).then(this.assignResponseToData)
    },
    genTakePlayedCards() {
      takePlayedCards(this.tableName, this.username).then(
        this.assignResponseToData,
      )
    },
    genStartGame() {
      startTable(this.tableName).then(this.assignResponseToData)
    },
    assignResponseToData(response) {
      if (!response) {
        this.errorMessage = 'Error importante, avisale a Jorge'
        this.showDialog = true
        return
      }
      if (!response.status) {
        this.errorMessage = response.message
        this.showDialog = true
        return
      }
      console.log(response.game)

      if (this.key === JSON.stringify(response.game)) {
        return
      }

      this.players = response.game.players
      this.playedCards = response.game.played_cards
      this.deck = response.game.deck
      this.usernameTurn = response.game.username_turn
      this.clockwise = response.game.clockwise
      this.finishedUsernames = response.game.finished_usernames
      this.started = response.game.started
      this.key = JSON.stringify(response.game)
    },
  },
}
</script>
