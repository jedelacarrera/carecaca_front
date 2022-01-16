<template>
  <div class="deck-container">
    <img alt="Mazo de cartas" src="../assets/deck.png" />
    <p class="deck-amount">{{ amount }}</p>
  </div>
</template>

<script>
export default {
  props: {
    amount: {
      type: Number,
      default: 0,
    },
  },
  name: 'Deck',
}
</script>
<style>
.deck-container {
  position: relative;
  text-align: center;
  color: white;

  img {
    width: '100%';
  }
}
.deck-amount {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
}
</style>
