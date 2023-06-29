<template>
  <div class="about">
    <h1>scene.preload可以预加载精灵图</h1>
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
      const {Scene, Sprite, Group} = spritejs;
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

      //  声明异步函数，调用异步方法
      (async function () {
        //  资源地址
        const earthPNG = 'https://p3.ssl.qhimg.com/t01806718065fe97c65.png',
          earthJSON = 'https://s3.ssl.qhres2.com/static/d479c28f553c6cff.json';

        //  数组形式加载多个资源
        await scene.preload([earthPNG, earthJSON]);

        //  创建分组统一定位
        const group = new Group();
        group.attr({
          pos: [455, 215],
        });

        //  创建地球Sprite
        const earth = new Sprite();
        earth.attr({
          texture: 'earth_blue.png',
          pos: [115, 115],
          anchor: [0.5, 0.5],
        });

        //  创建地球影子Sprite
        const earthShadow = new Sprite();
        earthShadow.attr({
          texture: 'earth_shadow2.png',
          pos: [0, 0],
        });

        //  添加到分组
        group.append(earth, earthShadow);
        //  分组添加到图层
        layer.append(group);

        //  地球添加动画
        earth.animate([
          {rotate: 0, texture: 'earth_blue.png'},
          {rotate: 360, texture: 'earth_yellow.png'},
          {rotate: 720, texture: 'earth_green.png'},
          {rotate: 1080, texture: 'earth_white.png'},
          {rotate: 1440, texture: 'earth_blue.png'},
        ], {
          duration: 20000,
          iterations: Infinity,
        });
      }());
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