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
