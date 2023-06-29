<template>
  <div class="about">
    <h1>提供Rect矩形配置方法</h1>
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
      const {Scene, Rect} = spritejs;
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
      //  矩形
      const rect = new Rect({
        //  标准化
        normalize: true,
        pos: [600, 300],
        size: [300, 300],
        //  填充色，背景色
        fillColor: 'red',
      });
      layer.append(rect);
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