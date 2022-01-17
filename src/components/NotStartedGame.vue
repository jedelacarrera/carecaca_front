<template>
  <div>
    <div class="row mb-4">
      <Player
        v-for="player in players"
        :key="player.username"
        :username="player.username"
        :hand="player.hand"
        :hidden="player.hidden"
        :visible="player.visible"
      />
    </div>
    <div class="not-started-table-center">
      <v-btn @click="$emit('start-game')" class="ma-4">Repartir cartas</v-btn>
      <div class="ml-2 col">
        <p>fddsfs{{ lastAction }}</p>
        <p>gdsfg {{ lastLastAction }}</p>
        <p class="ml-2 font-weight-bold">
          Link para invitar gente:
          <a :href="tableUrl" target="blank">{{ tableUrl }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Player from '@/components/Player'

export default {
  props: {
    tableName: {
      type: String,
      default: '',
    },
    players: {
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
    tableUrl() {
      return window.location.origin + `?table=${this.tableName}`
    },
  },
  components: {
    Player,
  },
}
</script>
<style>
.not-started-table-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
