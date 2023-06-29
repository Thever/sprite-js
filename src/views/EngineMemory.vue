<template>
  <div class="about">
    <p>SpriteJS可以针对指定渲染引擎和内存使用率</p>
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
      (async function () {
        //  引入资源
        const {Scene, Sprite} = spritejs;
        //  容器
        const container = document.getElementById('stage');
        //  场景
        const scene = new Scene({
          container,
          width: 1200,
          height: 1200,
          // bufferSize: 500, //  指定内存大小，越大合并性能约好
        });
        //  预加载资源
        await scene.preload([
          'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
          'https://s3.ssl.qhres2.com/static/a6a7509c33a290a6.json',
        ]);
        //  layer bg
        const bglayer = scene.layer('bg', {
          handleEvent: false,
          // bufferSize: 500, //  指定内存大小，越大合并性能约好
        });
        //  layer fg
        const fglayer = scene.layer('fg', {
          handleEvent: false,
          // bufferSize: 500, //  指定内存大小，越大合并性能约好
        });
        //  中心点
        const center = [600, 640];
        //  定义区域
        const region = new Sprite();
        region.attr({
          anchor: 0.5,
          size: [920, 920],
          pos: center,
          bgcolor: '#f4f2e6',
          borderRadius: 120,
        });
        bglayer.append(region);

        //  定义机器人
        const robot = new Sprite('guanguan1.png');
        robot.attr({
          anchor: [0.5, 1],
          pos: [280, 600],
          transformOrigin: [0, -300],
          scale: 0.4,
        });
        fglayer.append(robot);
        //  机器人暴露到全局
        window.robot = robot;

        //  机器人行动
        async function robotMotion() {
          await robot.animate([
            {texture: 'guanguan1.png'},
            {texture: 'guanguan2.png'},
            {texture: 'guanguan3.png'},
            {texture: 'guanguan1.png'},
            {texture: 'guanguan2.png'},
            {texture: 'guanguan3.png', scale: [-0.4, 0.4]},
            {texture: 'guanguan1.png', scale: [0.4, 0.4]},
          ], {
            duration: 3000,
            easing: 'step-end',
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {y: 600},
            {y: 1280},
          ], {
            duration: 500,
            easing: 'ease-in',
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {texture: 'guanguan1.png'},
            {texture: 'guanguan3.png', scale: [-0.4, 0.4]},
            {texture: 'guanguan1.png'},
            {texture: 'guanguan2.png'},
            {texture: 'guanguan3.png', scale: [0.4, 0.4]},
          ], {
            duration: 2000,
            easing: 'step-end',
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {x: 280},
            {x: 940},
          ], {
            duration: 2000,
            easing: 'ease-in-out',
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {rotate: 0},
            {rotate: -70},
          ], {
            duration: 1000,
            easing: 'ease-in-out',
            direction: 'alternate',
            iterations: 2,
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {texture: 'guanguan3.png'},
            {texture: 'guanguan1.png'},
            {texture: 'guanguan2.png'},
            {texture: 'guanguan1.png'},
            {texture: 'guanguan3.png'},
          ], {
            duration: 2500,
            easing: 'step-end',
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {rotate: 0},
            {rotate: -70},
          ], {
            duration: 1000,
            easing: 'ease-in-out',
            direction: 'alternate',
            iterations: 2,
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {texture: 'guanguan3.png'},
            {texture: 'guanguan1.png'},
            {texture: 'guanguan2.png'},
            {texture: 'guanguan1.png'},
            {texture: 'guanguan3.png', scale: [-0.4, 0.4]},
          ], {
            duration: 2500,
            easing: 'step-end',
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {x: 940},
            {x: 280, offset: 0.99, scale: [-0.4, 0.4]},
            {x: 280, scale: [0.4, 0.4]},
          ], {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards',
          }).finished;

          await robot.animate([
            {x: 280, y: 1280, rotate: 0},
            {x: 940, y: 1280, rotate: 0, offset: 0.3},
            {x: 940, y: 1280, rotate: -90, offset: 0.35},
            {x: 940, y: 600, rotate: -90, offset: 0.65},
            {x: 940, y: 600, rotate: -180, offset: 0.7},
            {x: 280, y: 600, rotate: -180},
          ], {
            delay: 500,
            duration: 3500,
            easing: 'ease-in',
            fill: 'forwards',
          }).finished;

          robot.attr({
            texture: 'guanguan1.png',
          });

          await robot.animate([
            {y: 600, rotate: -180},
            {y: 600, rotate: 0},
          ], {
            delay: 1000,
            duration: 1000,
            fill: 'forwards',
          }).finished;
        }
        //  场景暴露到全局
        window.scene = scene;
        
        // noprotect
        // eslint-disable-next-line no-constant-condition
        while(1) {
          /* eslint-disable no-await-in-loop */
          //  调用机器人动画
          await robotMotion();
          /* eslint-enable no-await-in-loop */
        }
      }())
    }
  }
}
</script>
<style scoped>
#stage{
  width:600px;
  height:600px;
  background-color:#FFF;
  margin:0 auto;
  border:2px solid skyblue;
}
</style>