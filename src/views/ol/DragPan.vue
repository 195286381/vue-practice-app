<template>
  <div class="wrap">
    <div class="ol-box" ref="map">
    </div>
    <button @click="initDragZoom(false)">zoom in</button>
    <button @click="initDragZoom(true)">zoom out</button>
    <button @click="initDragZoom()">zoom default</button>
  </div>
</template>

<script>
import 'ol/ol.css'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { View, Map } from 'ol'
import RegionZoom from '../../utils/ol/RegionZoom'
// import { defaults } from 'ol/control'
export default {
  name: 'DragPan',
  mounted () {
    this.initMap()
    this.initDragZoom()
  },
  methods: {
    initMap () {
      this._map = new Map({
        target: this.$refs.map,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 0
        })
      })
    },
    initDragZoom (flag) {
      (new RegionZoom(this._map)).enable(flag)
    }
  }
}
</script>

<style scoped>
  .ol-box {
    height: 600px;
    margin: 20px auto;
  }
</style>
