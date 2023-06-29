<template>
  <div class="about">
    <h1>Ring类绘制圆环</h1>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
export default {
  name: 'BlockBorderRaduis',
  components: {
  },
  mounted() {
    this.init()
  },  
  methods: {
    init() {
      //  引入资源
      const {Scene, Ring} = spritejs;
      //  容器
      const container = document.getElementById('stage');
      //  场景
      const scene = new Scene({
        container,
        width: 1200,
        height: 600,
      });
      //  图层
      const layer = scene.layer();
      //  圆环
      const ring = new Ring({
        pos: [300, 300],
        //  内圆半径
        innerRadius: 50,
        //  外圆半径
        outerRadius: 100,
        //  填充色
        fillColor: 'blue',
      });
      layer.append(ring);

      //  可控
      const ring2 = ring.cloneNode();
      ring2.attr({
        pos: [700, 300],
        //  0度再3点位置，顺时针+，逆时针-
        //  起始角
        startAngle: -90,
        //  结束角
        endAngle: 180,
        fillColor: 'red',
      });
      layer.append(ring2);
    }
  }
}
</script>
<style scoped>
#stage{
  width:600px;
  height:360px;
  background-color:#FFF;
  margin:0 auto;
  border:2px solid skyblue;
}
</style>