<template>
  <div class="about">
    <h1>Path可以直接在Path.d属性中使用</h1>
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
      //  解构资源
      const {Scene, Path} = spritejs;
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
      //  路径
      const p1 = new Path();
      //  配置属性
      p1.attr({
        //  路径
        d: 'M0,0A200,200,0,1,1,400,0A200,200,0,1,1,0,0Z',
        //  缩放
        scale: 0.5,
        //  边框色
        strokeColor: '#033',
        //  背景色
        fillColor: '#839',
        //  边框宽度
        lineWidth: 12,
        //  位置
        pos: [100, 150],
      });
      //  添加路径
      layer.appendChild(p1);
      //  路径2
      const p2 = new Path();
      p2.attr({
        d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
        //  标准化，以图形中心作为锚点
        normalize: true,
        //  逆时针旋转度数， >=0逆时针，<0顺时针 
        rotate: 45,
        fillColor: '#ed8',
        pos: [500, 300],
      });
      layer.appendChild(p2);
      //  路径3
      const p3 = new Path();
      p3.attr({
        d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
        normalize: true,
        strokeColor: '#f37',
        lineWidth: 20,
        pos: [950, 300],
      });
      layer.appendChild(p3);
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