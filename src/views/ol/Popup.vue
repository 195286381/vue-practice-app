<template>
  <div class="container">
    <div class="map" ref="map"></div>
    <div class="popup" ref="popup"></div>
  </div>
</template>

<script>
import TileLayer from 'ol/layer/Tile'
import { Map, Overlay, View } from 'ol'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'

export default {
  name: 'Popup.vue',
  mounted () {
    this._mapEle = this.$refs.map
    this._popupEle = this.$refs.popup

    this._map = new Map({
      target: this._mapEle,
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: fromLonLat([112.4, 23.5]),
        zoom: 5
      })
    })

    this.addPopup()
    this.addMapClickEvent()
  },
  methods: {
    addPopup () {
      const popupOverlay = new Overlay({
        position: undefined,
        positioning: 'center-center',
        autoPan: true,
        // offset: [20, 20],
        element: this._popupEle
      })
      this._popup = popupOverlay
      this._popupEle.addEventListener('click', () => {
        popupOverlay.setPosition(undefined)
      })
      this._map.addOverlay(popupOverlay)
    },
    addMapClickEvent () {
      this._map.on('singleclick', evt => {
        const pixel = this._map.getEventPixel(evt.originalEvent)
        console.log(pixel)
        const coordinate = evt.coordinate
        this._popup.setPosition(coordinate)
        this._popupEle.innerHTML = coordinate
      })
    }
  }

}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }

  .popup {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: red;
  }

  .map {
    width: 100%;
    height: 70%;
  }
</style>
