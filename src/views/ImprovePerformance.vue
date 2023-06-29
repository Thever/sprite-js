<template>
  <div class="about">
    <p>SpriteJS提升性能的方法：</p>
    <ul>
      <li>1.内存足够的情况下，默认的WebGL渲染效率高于Canvas2D，但是内存消耗大</li>
      <li>2.内存限制，定点数过多的情况下，在Scene或Layer使用contextType: '2d',开启Canvas2D渲染</li>
      <li>3.设置Scene合适的顶点数，scene.bufferSize</li>
      <li>4.使用组拓印（seal）和云 Cloud</li>
    </ul>
    <div>
      <div style="width:90px;display:inline-block;">
        sprites: <span id="spriteCount">500</span>
      </div>
      | draw calls: <span id="drawCalls">2</span></div>
    <div id="paper"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
// 本地导入json
// import * as birdsJsonUrl from '@/assets/5f6911b7b91c88da.json'
// 导入three 模块
// import * as THREE from 'three';

export default {
  name: 'BlockBorderRaduis',
  components: {
  },
  mounted() {
    this.init()
  },  
  methods: {
    init() {
      //  小鸟资源
      const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
      const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
      //  DOM
      const container = document.getElementById('paper');
      const spriteCount = document.getElementById('spriteCount');
      const drawCalls = document.getElementById('drawCalls');

      /* globals Animator */
      // 场景
      const paper = new spritejs.Scene({
        container,
        width: 800,
        height: 800,
      });

      //  异步函数控制异步回调
      (async function () {
        //  继承 Sprite 定义类 Bird
        class Bird extends spritejs.Sprite {
          constructor() {
            super('bird1.png');
          }
        }
        //  预载资源
        await paper.preload([birdsRes, birdsJsonUrl]);
        //  背景层
        const bglayer = paper.layer('bg'),
        // 前景层
        // 不代理事件，提升性能
        fglayer = paper.layer('fg', {
          handleEvent: false,
        });

        //  位置
        const axisZero = [400, 400];
        //  Sprite
        const circle = new spritejs.Sprite();

        //  修改属性
        circle.attr({
          anchor: [0.5, 0.5],
          size: [800, 800],
          pos: axisZero,
          bgcolor: '#139',
          opacity: 0.5,
          borderRadius: 400,
        });
        //  添加到图层
        bglayer.appendChild(circle);

        //  随机生成添加点位
        function pointAdd(p1, p2 = [0, 0]) {
          return [p1[0] + p2[0], p1[1] + p2[1]].map(Math.round);
        }
        //  随机生成目标点位
        function pointSub(p1, p2 = [0, 0]) {
          return [p1[0] - p2[0], p1[1] - p2[1]].map(Math.round);
        }

        //  休眠方法
        // eslint-disable-next-line no-unused-vars
        function sleep(time) {
          return new Promise(resolve => setTimeout(resolve, time));
        }

        //  异步方法，随机动画
        async function randomAnimate(bird) {
          //  bird类添加 pos 位置属性
          const birdPoint = bird.attr('pos');
          //  生成随机角度
          const randomArc = Math.random() * 2 * Math.PI;
          //  生成随机点
          const randomPoint = pointAdd([350 * Math.cos(randomArc),
            350 * Math.sin(randomArc)], axisZero);
          //  生成目标位置
          const dist = pointSub(randomPoint, birdPoint);
          //  计算距离
          const distance = Math.round(Math.sqrt(dist[0] * dist[0] + dist[1] * dist[1]));
          //  判断是否翻转
          const flip = dist[0] < 0 ? -1 : 1;
          //  生成动画时间
          const duration = 5 * distance + 100;

          bird.attr('scale', [flip, 1]); // scale 放在外面，触发缓存

          // index.html里引入了三方库 Animator.js
          const anim = new Animator(duration, (p) => {
            //  生成移动位置信息
            const pos = pointAdd(birdPoint, [p * dist[0], p * dist[1]]);
            //  添加属性
            bird.attr({pos});
          });
          //  等待动画执行
          await anim.animate();

          // const anim = bird.animate([
          //   {pos: birdPoint},
          //   {pos: pointAdd(birdPoint, dist)}
          // ], {
          //   duration,
          //   fill: "forwards",
          // })
          // await anim.finished

          // await sleep(500);
        }

        //  小鸟数量
        let birdCount = 0;
        //  异步方法添加小鸟
        async function addBird() {
          //  更新文字内容
          spriteCount.innerHTML = ++birdCount;
          //  实例化小鸟
          const bird = new Bird();
          //  添加属性
          bird.attr({
            anchor: [0.5, 0.5],
            pos: axisZero,
            size: [86, 60],
            // bgcolor: 'red',
          });
          //  暴露到window全局
          window.bird = bird;
          //  小鸟添加到前景层
          fglayer.appendChild(bird);

          //  定时修改小鸟背景图实现动画效果
          let idx = 0;
          setInterval(() => {
            // bird.forceUpdate();
            bird.attributes.texture = `bird${++idx % 3 + 1}.png`;
          }, 100);

          //  调用小鸟随机动画
          randomAnimate(bird);
          // noprotect
          do {
            //  循环调用小鸟动画
            await randomAnimate(bird); // eslint-disable-line no-await-in-loop
          // eslint-disable-next-line no-constant-condition
          } while(1);
        }
        //  添加小鸟
        addBird();

        //  点击紫色背景添加小鸟
        // eslint-disable-next-line no-unused-vars
        circle.addEventListener('click', (evt) => {
          addBird();
        });

        //  外部时钟监听
        requestAnimationFrame(function f() {
          //  如果小鸟数量 < 500,添加小鸟
          if(birdCount < 500) {
            addBird();
            requestAnimationFrame(f);
          }
        });
        //  0.1更新 drawCalls 信息
        setInterval(() => {
          // console.log('tick');
          drawCalls.innerHTML = fglayer.renderer._drawCalls;
        }, 100);
      }());
    }
  }
}
</script>
<style scoped>
#stage{
  width:1200px;
  height:600px;
  background-color:#FFF;
  margin:0 auto;
  border:2px solid skyblue;
}
#paper{
  width:800px;
  height:800px;
  background-color:#FFF;
  margin:0 auto;
  border:2px solid skyblue;
}
</style>