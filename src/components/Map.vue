<template>
  <div class="map">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url"></l-tile-layer>

      <l-control class="example-custom-control">
        <div class="date-selector-container">
          <input class="date-selector" v-model="selectedDate" :min="minDate" :max="maxDate" type="date">
        </div>
      </l-control>

      <div v-for="(marker, index) in markers" :key="index">
        <l-marker
          :lat-lng="Object.values(marker)"
          :icon="icon"
        ></l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControl, LMarker } from '@vue-leaflet/vue-leaflet'
import fireIcon from '@/leaflet/fireIcon'

// Format date to input format
function formatDate (date) {
  const fullYear = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const dayOfMonth = ('0' + date.getDate()).slice(-2)
  return `${fullYear}-${month}-${dayOfMonth}`
}

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
    LControl,
    LMarker
  },
  props: {
    title: String,
    markers: Array
  },
  methods: {
    getMarkersDates () {
      return this.markers.map(marker => new Date(marker.date))
    }
  },
  computed: {
    minDate () {
      const dates = this.getMarkersDates()
      const minDate = new Date(Math.min(...dates))
      console.log(formatDate(minDate))
      return formatDate(minDate)
    },
    maxDate () {
      const dates = this.getMarkersDates()
      const maxDate = new Date(Math.max(...dates))
      return formatDate(maxDate)
    }
  }
}
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 100%;
}
</style>
