<template>
  <ul id="nav">
    <li>
      <router-link to="/">Map</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ul>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: 'Noto Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

#nav {
  background-color: #e0503d;

  a {
    font-weight: bold;
      color: #fff1f1;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
