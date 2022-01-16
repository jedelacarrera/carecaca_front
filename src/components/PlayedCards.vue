<template>
  <div class="played-cards-row">
    <div class="played-cards-container">
      <img alt="Cartas jugadas" src="../assets/played_cards.png" />
      <div class="played-cards-text">
        <p :class="color === 'red' ? 'red-text' : ''">{{ rank }}</p>
        <v-icon :color="color">{{ icon }}</v-icon>
      </div>
    </div>
    <p>{{ suffix }}</p>
  </div>
</template>
<script>
import { cardColor, cardIcon } from '@/helpers/cards'

export default {
  props: {
    rank: {
      type: String,
      default: '',
    },
    suit: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    suffix() {
      if (this.amount <= 1) {
        return ` #${this.total}`
      }
      return ` (x${this.amount}) #${this.total}`
    },
    color() {
      return cardColor(this.suit)
    },
    icon() {
      return cardIcon(this.suit)
    },
  },
  name: 'PlayedCards',
}
</script>
<style>
.played-cards-row {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
.played-cards-container {
  position: relative;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;

  img {
    width: '100%';
  }
}

.played-cards-text {
  color: black;
  position: absolute;
  top: 25%;
  left: 21%;
  transform: rotate(30deg) skewX(-34deg) translate(0%, -50%);
  font-size: 1.5em;
}
</style>
