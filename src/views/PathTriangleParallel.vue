<template>
  <div class="about">
    <h1>提供Triangle三角形，Parallel平行四边形配置方法</h1>
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
      //  资源
      const {Scene, Triangle, Parallel} = spritejs;
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
      //  三角形
      const traingle = new Triangle({
        pos: [150, 150],
        sides: [300, 300],
        //  两边夹角度数
        angle: 60,
        fillColor: '#7cc',
      });
      layer.append(traingle);
      //  平行四边形
      const parallel = new Parallel({
        normalize: true,
        pos: [750, 300],
        //  两邻边长度
        sides: [200, 200],
        //  两邻边夹角
        angle: 60,
        rotate: 60,
        //  背景色
        fillColor: '#c7c',
      });
      layer.append(parallel);
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