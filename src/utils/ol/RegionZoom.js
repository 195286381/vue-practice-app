import { DragZoom } from 'ol/interaction'
import { always } from 'ol/events/condition'

/**
 * Region Map 的区域缩放功能.
 * @param map
 * @constructor
 */
function RegionSelectZoom (map) {
  this._init(map)
}

RegionSelectZoom.prototype._init = function (map) {
  this._map = map
}

// 激活功能.
// 如果不传递 默认放大.
// 传递true 则缩小.
RegionSelectZoom.prototype.enable = function (out) {
  // 移除之前的drapZoom. 确保只执行一次.
  this._map.getInteractions().forEach(interaction => {
    if (interaction instanceof DragZoom) {
      this._map.removeInteraction(interaction)
    }
  })
  const flag = !!out
  // 为了改变DragZoom的内容，重新实例化一个控件
  this._dragZoom = new DragZoom({
    condition: always,
    out: flag // 此处为设置拉框完成时放大还是缩小 true缩小
  })
  // 默认控件不激活状态
  // dragZoom.setActive(false)
  // 将控件添加到地图
  this._map.addInteraction(this._dragZoom)
  this._dragZoom.on('boxend', () => {
    // alert()
    this._map.removeInteraction(this._dragZoom)
  })
}

export default RegionSelectZoom
