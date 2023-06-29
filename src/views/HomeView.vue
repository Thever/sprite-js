<template>
  <div class="home">
    <h1>基本使用</h1>
    <div id="stage"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
export default {
  name: 'HomeView',
  components: {
  },
  mounted() {
    this.init()
  },  
  methods: {
    init() {
      //  引入资源
      const {Scene, Sprite} = spritejs;
      //  容器
      const container = document.querySelector('#stage');
      //  场景
      const scene = new Scene({container, width: 1080, height: 600, mode: 'stickyTop'});
      //  图层
      const layer = scene.layer();
      //  网络资源
      // const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png');
      //  使用本地资源
      let image = require('@/assets/t01c33383c0e168c3c4.png')
      //  使用图片资源生成sprite块元素
      const robot = new Sprite(image);
      //  设置基础属性
      robot.attr({
        //  锚点
        anchor: [0, 0.5],
        //  位置
        pos: [0, 0],
      });
      //  配置动画
      robot.animate(
      //  位置信息  
      [
        {pos: [0, 0]},
        {pos: [0, 300]},
        {pos: [700, 300]},
        {pos: [700, 0]},
      ], 
      //  动环参数
      {
        //  持续时间(毫秒)
        duration: 5000,
        //  执行次数 无穷(循环播放播放)
        iterations: Infinity,
        direction: 'alternate',
      });
      //  块元素添加到
      layer.append(robot);
    }
  }
}
</script>
<style scoped>
#stage{
  width:1080px;
  height:600px;
  background-color:skyblue;
  margin:0 auto;
}
</style>