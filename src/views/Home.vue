<template>
  <div class="home">
    <Map :markers="fires" />
  </div>
</template>

<script>
import Map from '@/components/Map'

export default {
  name: 'Home',
  data () {
    return {
      fires: []
    }
  },
  components: {
    Map
  },
  async created () {
    const API_URL = 'http://localhost:8080/data/s2impact-global-fire-21-28-agosto.json'

    try {
      const response = await fetch(API_URL)
      this.fires = await response.json()
    } catch (err) {
      alert(err) // Failed to fetch
    }
  }
}
</script>

<style lang="scss">

.home{
  flex-grow: 1;

  .logo {
    max-height: 300px;
  }
}
</style>
