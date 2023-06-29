<template>
  <div class="about">
    <h1>Arc类和Ellipse类可以绘制圆和椭圆弧。</h1>
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
      const {Scene, Arc, Ellipse} = spritejs;
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
      //  圆弧
      const fan = new Arc({
        pos: [300, 300],
        radius: 100,
        //  开始角度
        startAngle: 0,
        //  结束角度
        endAngle: 120,
        //  背景
        fillColor: 'blue',
      });
      layer.append(fan);

      //  克隆圆弧
      const fan2 = fan.cloneNode();
      //  重新配置属性
      fan2.attr({
        pos: [300, 150],
        closeType: 'sector',
      });

      layer.append(fan2);

      //  椭圆弧
      const ellipse = new Ellipse({
        pos: [700, 300],
        //  X 轴半径
        radiusX: 150,
        //  Y 轴半径
        radiusY: 100,
        //  起始角度
        startAngle: 0,
        //  结束角度
        endAngle: 240,
        //  描边宽度
        lineWidth: 6,
        //  描边颜色
        strokeColor: 'red',
        //  填充颜色
        fillColor: 'green',
        //  闭合方式，none不闭合, sector中心闭合, normal直接闭合
        closeType: 'sector',
      });
      layer.append(ellipse);
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