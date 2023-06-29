<template>
  <div class="about">
    <h1>anchor值的变化会影响块元素的定位和默认的transformOrigin</h1>
    <img src="@/assets/anchor.png"/>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
export default {
  name: 'BlockAnchor',
  components: {
  },
  mounted() {
    this.init()
  },  
  methods: {
    init() {
      //  引入资源
      const {Scene, Sprite, Gradient, Path} = spritejs;
      //  容器
      const container = document.getElementById('stage');
      //  场景
      const scene = new Scene({
        container,
        width: 600,
        height: 360,
      });
      //  图层
      const layer = scene.layer();
      //  渐变内容
      const gradient = new Gradient({
        vector: [0, 0, 150, 150],
        colors: [
          {offset: 0, color: 'red'},
          {offset: 1, color: 'green'},
        ],
      });
      //  sprite模块对象
      const box = new Sprite({
        //  锚点位置中心
        anchor: [0.5, 0.5],
        //  尺寸
        size: [150, 150],
        //  位置
        pos: [300, 180],
        //  背景使用渐变
        bgcolor: gradient,
      });
      //  sprite添加到图层
      layer.append(box);
      //  路径绘制十字定位
      const cross = new Path('M-5 0L5 0M0 5L0 -5');
      cross.attr({
        pos: [300, 180],
        lineWidth: 2,
        strokeColor: 'gold',
      });
      //  添加到图层
      layer.append(cross);
      //  给sprite添加旋转动画
      box.animate([
        {rotate: 0},
        {rotate: 360},
      ], {
        iterations: Infinity,
        duration: 3000,
      });
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