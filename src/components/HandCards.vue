<template>
  <div>
    <div class="row mb-4">
      <div class="col" v-for="(card, index) in cards" :key="index">
        <Card :rank="card.rank" :suit="card.suit" :lg="cards.length <= 4" />
        <v-checkbox v-model="selectedCards[index]" class="ml-2" />
      </div>
    </div>
    <v-btn
      color="primary"
      class="mr-2"
      @click="$emit('play-cards', cardsToPlay)"
      :disabled="disabled"
      >Jugar cartas</v-btn
    >
    <v-btn color="primary" @click="$emit('take-played-cards')">{{
      takeCardsMessage
    }}</v-btn>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Card,
  },
  data() {
    return {
      selectedCards: this.cards.map(() => false),
    }
  },
  computed: {
    disabled() {
      return this.selectedCards.every(x => !x)
    },
    cardsToPlay() {
      return this.cards.filter((_, index) => this.selectedCards[index])
    },
    takeCardsMessage() {
      return this.cards.length > 0
        ? 'Llevarme el mazo'
        : 'Llevarme el mazo (Seguro? Hay otras opciones)'
    },
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
