<template>
  <div class="home">
    <LoginToTable message="Juego cara de caca!" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginToTable from '@/components/LoginToTable.vue'

export default {
  name: 'Home',
  components: {
    LoginToTable,
  },
}
</script>
