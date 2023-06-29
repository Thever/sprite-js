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
      //  引入资源
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
      // const imgUrl = 'https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg';
      const imgUrl = require('@/assets/clip.jpg')
      //  路径
      const path = new Path({
        d: 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',
        //  标准化，图形中心作为锚点
        normalize: true,
        scale: 15,
        pos: [600, 300],
        //  背景色
        fillColor: 'red',
        //  背景使用图片或纹理
        texture: imgUrl,
        //  背景图片/纹理位置
        textureRect: [0, 0, 48, 30],
        rotate: 15,
      });

      layer.append(path);
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