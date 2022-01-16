<template>
  <div :class="containerClass"></div>
</template>
<script>
export default {
  props: {
    lg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    containerClass() {
      const classes = ['hidden-card', 'card-container', 'bg-black']
      if (this.lg) {
        classes.push('card-container-lg')
      }
      return classes.join(' ')
    },
  },
  name: 'PlayedCards',
}
</script>
<style>
.hidden-card {
  position: relative;
  top: 7px;
  left: 10px;
}
</style>
