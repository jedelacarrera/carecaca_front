<template>
  <v-app id="app">
    <!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table?username=Me&table=this_table">Table</router-link>
    </div>
    -->
    <router-view />
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.red-text {
  color: red;
}

.bg-black {
  background-color: black;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid black;
  border-width: 2;
  border-radius: 10px;
  margin: 4px;
  width: 60px;
  height: 84px;
  padding-bottom: 5px;
  padding-top: 5px;
}
.card-container-lg {
  font-size: 1.8em;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100px;
  height: 140px;
}
</style>
