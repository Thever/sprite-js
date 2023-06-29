<template>
  <div class="about">
    <h1>sprite.js自带滤镜可以控制展示效果</h1>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
// 本地导入json
// import * as birdsJsonUrl from '@/assets/5f6911b7b91c88da.json'
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
      const {Scene, Sprite} = spritejs;
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
      //  图片资源
      const images = [
        {id: 'girl1', src: 'https://p5.ssl.qhimg.com/t01feb7d2e05533ca2f.jpg'},
        {id: 'girl2', src: 'https://p5.ssl.qhimg.com/t01deebfb5b3ac6884e.jpg'},
      ];
      //  声明异步函数直接调用
      (async function () {
        //  定义图片滤镜渲染方法
        function applyFilters(texture, filters, y, scale = 1) {
          filters.forEach((filter, i) => {
            const s = new Sprite();
            s.attr({
              texture,
              pos: [100 + i * 150, y],
              scale,
              filter,
            });
            layer.append(s);
          });
        }
        //  预加载资源
        await scene.preload(...images);
        
        //  渲染图片
        applyFilters('girl1', [
          'none',
          'brightness(150%)',
          'grayscale(50%)',
          'blur(12px)',
          'drop-shadow(15, 15, 5, #033)',
          'hue-rotate(45)',
        ], 100, 0.3);

        applyFilters('girl2', [
          'none',
          'invert(100%)',
          'opacity(70%)',
          'saturate(20%)',
          'sepia(100%)',
          'hue-rotate(135)',
        ], 300, 0.6);
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