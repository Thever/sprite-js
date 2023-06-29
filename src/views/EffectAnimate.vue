<template>
  <div class="about">
    <h1>texturepacker可以用来自定义动画，配合路径动画</h1>
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
      //  导入资源
      const {Scene, Path, Sprite, Gradient} = spritejs;
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
      //  网络资源
      const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
      const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
      
      //  本地资源不能预加载
      // const birdsJsonUrl = import('@/assets/5f6911b7b91c88da.json')
      // const birdsRes = require('@/assets/birds.png')

      //  声明异步函数并立即执行
      // eslint-disable-next-line no-unexpected-multiline
      (async function () {
        //  场景预加载资源
        await scene.preload([birdsRes, birdsJsonUrl]);
        //  路径
        const d = 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437Z';
        //  渐变对象
        const gradient = new Gradient({
          //  矢量位置
          vector: [280, 470, 680, 70],
          //  颜色
          colors: [{
            offset: 0,
            color: 'rgba(255,0,0,1)',
          }, {
            offset: 0.5,
            color: 'rgba(255,0,0,0)',
          }, {
            offset: 1,
            color: 'rgba(255,0,0,0)',
          }],
        });
        //  定义path路径
        const path = new Path({
          d,
          lineWidth: 26,
          fillColor: 'red',
          strokeColor: gradient,
          // 连线接头样式 miter, bevel, round
          // lineJoin: 'bevel',
        });
        //  图层添加路径
        layer.append(path);
        //  路径暴露到window全局对修昂中
        window.path = path;
        //  Sprite加载texturepacker处理后的bird1图片
        const bird = new Sprite('bird1.png');
        //  添加属性
        bird.attr({
          anchor: [0.5, 0.5],
          size: [65, 45],
          //  定义运动轨迹
          offsetPath: d,
          //  设置zIndex
          zIndex: 200,
        });
        //  图层添加bird
        layer.append(bird);

        bird.animate([
          {offsetDistance: 0},
          {offsetDistance: 1},
        ], {
          //  周期
          duration: 6000,
          //  动画循环
          iterations: Infinity,
        });

        //  定期替换背景图来实现动画
        let i = 0;
        setInterval(() => {
          bird.attributes.texture = `bird${i++ % 3 + 1}.png`;
        }, 100);

        const startTime = Date.now();
        const T = 6000;
        requestAnimationFrame(function next() {
          const p = Math.PI * 2 * (Date.now() - startTime) / T;
          const colors = [
            {offset: 0, color: 'rgba(255,0,0,1)'},
            {offset: 0.5 + 0.5 * Math.abs(Math.sin(p)), color: 'rgba(255,0,0,0)'},
            {offset: 1, color: 'rgba(255,0,0,0)'},
          ];

          const gradients = new Gradient({
            vector: [280, 470, 680, 70],
            colors,
          });
          path.attr({strokeColor: gradients});

          requestAnimationFrame(next);
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