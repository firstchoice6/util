<template>
  <div id="app">
    <div id="nav">
      <a-row>
        <a-col :span="6" class="col">
          <router-link to="/">Home</router-link>
        </a-col>
        <a-col :span="6">
          <router-link to="/about">About</router-link>
        </a-col>
        <a-col :span="6" class="col">
          <router-link to="/demo">Demo</router-link>
        </a-col>
        <a-col :span="6" class="col">
          <router-link to="/layout">Layout</router-link>
        </a-col>
      </a-row>
    </div>
    <router-view />
  </div>
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
</style>
