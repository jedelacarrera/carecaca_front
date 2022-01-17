<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/favicon.jpeg" width="300px" />
    <h2>Juego cara de caca</h2>
    <p>Versión online del juego, juega con los que quieras</p>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation class="col-md-4">
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="Nombre"
          required
        />
        <v-text-field
          v-model="table"
          :rules="tableRules"
          label="Mesa"
          required
        />
        <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">
          Entrar
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    queryTable: {
      type: String,
      default: '',
    },
  },
  name: 'LoginToTable',
  data() {
    return {
      valid: true,
      username: '',
      usernameRules: [v => !!v || 'Escribe tu nombre'],
      table: this.queryTable,
      tableRules: [v => !!v || 'Se necesita una messa'],
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$router.push({
          name: 'Table',
          query: { username: this.username, table: this.table },
        })
      }
    },
  },
}
</script>
