<template>
  <div class="map">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url"></l-tile-layer>

      <l-control class="example-custom-control">
        <div class="date-selector-container">
          <input
            class="date-selector"
            type="date"
            :value="dateToYYYYMMDD(selectedDate)"
            @input="selectedDate = $event.target.valueAsDate"
            :min="dateToYYYYMMDD(minDate)"
            :max="dateToYYYYMMDD(maxDate)"
          >
        </div>
      </l-control>

      <div v-for="(marker, index) in markers" :key="index">
        <l-marker
          :lat-lng="Object.values(marker)"
          :icon="icon"
        >
          <l-popup><b>Date:</b> {{ marker.date }}</l-popup>
        </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControl, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import fireIcon from '@/components/leaflet/fireIcon'

export default {
  name: 'Map',
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [47.413220, -1.219482],
      bounds: null,
      icon: fireIcon,
      selectedDate: this.minDate
    }
  },
  components: {
    LMap,
    LTileLayer,
    LControl,
    LMarker,
    LPopup
  },
  props: {
    title: String,
    markers: Array
  },
  methods: {
    getMarkersDates () {
      return this.markers.map(marker => new Date(marker.date))
    },
    dateToYYYYMMDD (date) {
      date = new Date(date)
      const fullYear = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const dayOfMonth = ('0' + date.getDate()).slice(-2)
      return `${fullYear}-${month}-${dayOfMonth}`
    }
  },
  computed: {
    minDate () {
      const minDate = new Date(Math.min(...this.getMarkersDates()))
      return minDate
    },
    maxDate () {
      const maxDate = new Date(Math.max(...this.getMarkersDates()))
      return maxDate
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
