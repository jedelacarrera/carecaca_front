<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/favicon.jpeg" width="300px" />
    <p>{{ message }}</p>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation class="col-md-4">
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="Nombre"
          required
        ></v-text-field>

        <v-text-field
          v-model="table"
          :rules="tableRules"
          label="Mesa"
          required
        ></v-text-field>

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
    message: {
      type: String,
      default: '',
    },
  },
  name: 'LoginToTable',
  data: () => ({
    valid: true,
    username: '',
    usernameRules: [v => !!v || 'Escribe tu nombre'],
    table: 'newyear',
    tableRules: [v => !!v || 'Se necesita una messa'],
  }),

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
<style>
.login {
  background-color: #f6f6f6;
}
</style>
