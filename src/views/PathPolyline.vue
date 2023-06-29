<template>
  <div class="about">
    <h1>利用Polyline元素可以绘制折线和多边形。</h1>
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
      const {Scene, Polyline} = spritejs;
      //  容器
      const container = document.getElementById('stage');
      //  场景
      const scene = new Scene({
        container,
        width: 1200,
        height: 600,
        // contextType: '2d',
      });
      //  图层
      const layer = scene.layer();
      //  绘制折线
      const line = new Polyline({
        borderWidth: 1,
        //  起始点位
        pos: [250, 50],
        //  相对于起始点位的位置，(x,y) 两个为一组
        points: [0, 0, 100, 100, 200, 0, 300, 100, 400, 0, 500, 100, 600, 0],
        strokeColor: 'blue',
        lineWidth: 3,
      });
      layer.append(line);

      //  克隆折线
      const line2 = line.cloneNode();
      //  更改属性
      line2.attr({
        smooth: true,
        strokeColor: 'red',
      });
      layer.append(line2);
      //  绘制多边形
      const polygon = new Polyline({
        pos: [250, 350],
        points: [0, 0, 100, 100, 200, 0, 300, 100, 400, 0, 500, 100, 600, 0],
        fillColor: '#37c',
        lineWidth: 3,
        //  闭合，形成多边形
        close: true,
        //  平滑
        smooth: true,
      });
      layer.append(polygon);
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