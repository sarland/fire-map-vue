<template>
  <div class="map">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url"></l-tile-layer>

      <div v-for="(marker, index) in markers" :key="index">
        <l-marker
          :lat-lng="Object.values(marker)"
          :icon="icon"
        ></l-marker>
      </div>
    </l-map>
  </div>
</template>

import fireIcon from '@/leaflet/fireIcon'
export default {
  name: 'Map',
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [47.413220, -1.219482],
      bounds: null,
      icon: fireIcon,
      selectedDate: ''
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: {
    title: String,
    markers: Array
  },
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 100%;
}
</style>
