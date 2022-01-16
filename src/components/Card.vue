<template>
  <div :class="containerClass">
    <p :class="color === 'red' ? 'red-text' : ''">{{ rank }}</p>
    <v-icon :color="color" :large="lg">{{ icon }}</v-icon>
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
      default: 'outline',
    },
    cardBelow: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    suffix() {
      if (this.amount <= 1) {
        return ''
      }
      return ` (x${this.amount})`
    },
    color() {
      return cardColor(this.suit)
    },
    icon() {
      return cardIcon(this.suit)
    },
    containerClass() {
      const classes = ['card-container']
      if (this.lg) {
        classes.push('card-container-lg')
      }
      if (this.cardBelow) {
        classes.push('card-below')
      }
      return classes.join(' ')
    },
  },
  name: 'PlayedCards',
}
</script>
<style>
.card-below {
  box-shadow: 7px 10px black;
}
</style>
