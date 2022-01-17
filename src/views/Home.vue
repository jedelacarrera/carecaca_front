<template>
  <div class="home">
    <!-- <div class="row">
      <router-link to="/instructions">Instrucciones</router-link>
    </div>
    -->
    <LoginToTable :queryTable="queryTable" />
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
  computed: {
    queryTable() {
      return this.$route.query.table || ''
    },
  },
}
</script>
<style>
.home {
  background-color: #f6f6f6;
}
</style>
