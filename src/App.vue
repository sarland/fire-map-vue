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
  display: flex;
  height: 60px;
  background-color: #e0503d;
  justify-content: center;
  list-style: none;
  align-items: flex-end;

  li {
    display: flex;
    justify-content: center;
    height: 68.5%;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    a {
      font-weight: bold;
      color: #fff1f1;
      text-decoration: none;

      &.router-link-exact-active {
        border-bottom: 4px solid #fff1f1f1;
      }
    }
  }
}
</style>
