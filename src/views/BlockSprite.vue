<template>
  <div class="about">
    <h1>Sprite用来加载图片</h1>
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
      //  导入资源
      const {Scene, Sprite} = spritejs;
      const container = document.getElementById('stage');
      //  使用网络资源
      // const imgUrl = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png';
      //  使用本地资源
      const imgUrl = require('@/assets/girl.png');
      const imgUrl2 = require('@/assets/chai.gif');
      //  场景
      const scene = new Scene({
        container,
        width: 1200,
        height: 600,
        // contextType: '2d',
      });
      //  声明图层
      const layer = scene.layer();
      //  精灵图
      const s1 = new Sprite({
        anchor: [0, 0.5],
        pos: [20, 300],
        bgcolor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        //  使用图片
        texture: imgUrl,
      });
      //  图层加载精灵图
      layer.append(s1);
      
      //  切割图片
      const srcParts = [
        [0, 0, 190, 268],
        [0, 269, 190, 268],
        [191, 0, 190, 268],
        [191, 269, 190, 268],
      ];
      for(let i = 0; i < 2; i++) {
        for(let j = 0; j < 2; j++) {
          const sourceRect = srcParts[i * 2 + j];
          const x = 360 + i * 200;
          const y = j * 278;
          const s = new Sprite({
            x,
            y,
            texture: imgUrl,
            sourceRect,
          });
          layer.append(s);
        }
      }

      //  图片缩小展示
      const s2 = new Sprite({
        anchor: [0, 0.5],
        pos: [720, 300],
        bgcolor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        texture: imgUrl,
        // 指定图片显示位置，与锚点位置也相关
        // 初始点坐标0,0，宽度，高度，可以用来设置图片展示区域大小
        // textureRect: [0, 0, 95, 134],
        textureRect: [0, 0, 190, 268],
        //  重复显示图片
        textureRepeat: true,
      });

      layer.append(s2);

      //  使用gif图,只有第一帧
      //  图片缩小展示
      const s3 = new Sprite({
        anchor: [0, 0.5],
        pos: [920, 300],
        bgcolor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        texture: imgUrl2,
        // 指定图片显示位置，与锚点位置也相关
        // 初始点坐标0,0，宽度，高度，可以用来设置图片展示区域大小
        // textureRect: [0, 0, 95, 134],
        textureRect: [0, 0, 240, 227],
        //  重复显示图片
        textureRepeat: true,
      });
      layer.append(s3);
      //  使用变化的svg也是静态的
      const imgUrl3 = require('@/assets/mesh.svg');
      const s4 = new Sprite({
        anchor: [0, 0.5],
        pos: [920, 500],
        bgcolor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        texture: imgUrl3,
        // 指定图片显示位置，与锚点位置也相关
        // 初始点坐标0,0，宽度，高度，可以用来设置图片展示区域大小
        // textureRect: [0, 0, 95, 134],
        textureRect: [0, 0, 100, 100],
        //  重复显示图片
        textureRepeat: true,
      });
      layer.append(s4);
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