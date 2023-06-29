<template>
  <div class="about">
    <h1>Regular类和Star类可分别绘制正多边形和多角星。</h1>
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
      const {Scene, Regular, Star} = spritejs;
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
      //  正多边形
      const shape = new Regular({
        pos: [300, 300],
        //  边数
        edges: 7,
        //  半径
        radius: 100,
        //  旋转度数
        offsetAngle: 45,
        fillColor: 'blue',
      });
      layer.append(shape);
      //  星形
      const star = new Star({
        pos: [700, 300],
        //  角数
        angles: 5,
        //  内半径
        innerRadius: 50,
        //  外半径
        outerRadius: 100,
        //  旋转角度
        offsetAngle: 45,
        fillColor: 'red',
      });
      layer.append(star);
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