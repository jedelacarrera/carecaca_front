<template>
  <div class="player-col ma-6">
    <div class="player-row mb-4">
      <div class="player-col mr-2">
        <v-icon large>mdi-account</v-icon>
        <p>{{ username }}</p>
        <p class="red-text">{{ turn ? '*Turno' : '' }}</p>
      </div>
      <Card :rank="hand.length.toString()" cardBelow />
    </div>
    <div v-if="isCurrentPlayer && hand.length === 0 && visible.length > 0">
      <div class="player-row">
        <div class="col" v-for="(card, index) in visible" :key="index">
          <Card :rank="card.rank" :suit="card.suit" cardBelow />
          <v-checkbox v-model="selectedVisibleCards[index]" class="ml-1" />
        </div>
        <HiddenCard
          v-for="index in hiddenCards"
          :key="index + visible.length"
        />
      </div>
      <v-btn
        color="primary"
        class="mr-2"
        @click="$emit('play-visible-cards', visibleCardsToPlay)"
        :disabled="disabled"
        >Jugar cartas</v-btn
      >
      <v-btn
        color="primary"
        class="mr-2"
        @click="
          $emit('play-visible-cards-or-take-played-cards', visibleCardsToPlay)
        "
        :disabled="disabled"
        >Jugar/Llevarme cartas</v-btn
      >
    </div>
    <div
      v-else-if="isCurrentPlayer && hand.length === 0 && visible.length === 0"
    >
      <div class="player-row">
        <HiddenCard
          v-for="index in hiddenCards"
          :key="index + visible.length"
        />
      </div>
      <v-btn
        color="primary"
        class="mr-2 mt-2"
        @click="$emit('play-hidden-cards', [hidden[hidden.length - 1]])"
        >Jugar 1 carta</v-btn
      >
      <v-btn
        color="primary"
        class="mr-2 mt-2"
        @click="
          $emit('play-hidden-cards-or-take-played-cards', [
            hidden[hidden.length - 1],
          ])
        "
        >Jugar 1/Llevarme cartas</v-btn
      >
    </div>
    <div class="player-row" v-else>
      <Card
        v-for="(card, index) in visible"
        :key="index"
        :rank="card.rank"
        :suit="card.suit"
        cardBelow
      />
      <HiddenCard v-for="index in hiddenCards" :key="index + visible.length" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import HiddenCard from '@/components/HiddenCard'

export default {
  props: {
    username: {
      type: String,
      default: '',
    },
    hand: {
      type: Array,
      default: () => [],
    },
    visible: {
      type: Array,
      default: () => [],
    },
    hidden: {
      type: Array,
      default: () => [],
    },
    isCurrentPlayer: {
      type: Boolean,
      default: false,
    },
    turn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedVisibleCards: this.visible.map(() => false),
    }
  },
  computed: {
    hiddenCards() {
      return [...Array(this.hidden.length - this.visible.length).keys()]
    },
    disabled() {
      return this.selectedVisibleCards.every(x => !x)
    },
    visibleCardsToPlay() {
      return this.visible.filter((_, index) => this.selectedVisibleCards[index])
    },
  },
  components: {
    Card,
    HiddenCard,
  },
}
</script>
<style>
.player-container {
  margin: 16px;
}
.player-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.player-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
