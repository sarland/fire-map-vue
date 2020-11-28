import L from 'leaflet'

export default L.icon({
  iconUrl: 'img/fire-marker.png',
  // shadowUrl: 'fire-shadow.png',
  iconSize: [24, 30],
  shadowSize: [50, 64],
  iconAnchor: [12, 30],
  // shadowAnchor: [12, 20],
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
