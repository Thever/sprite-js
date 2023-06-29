<template>
  <div class="about">
    <h1>sprite.js可以控制动画的播放</h1>
    <button id="speedUp">加速</button>
    <button id="slowDown">减速</button>
    <button id="pause">暂停</button>
    <button id="resume">继续</button>
    <span id="playbackRate">playbackRate: 1.0</span>
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
      //  远程资源
      const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
      const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
      //  声明异步函数并立即加载
      (async function () {
        //  时间轴
        const timeline = layer.timeline;
        //  获取按钮对象
        const playbackRate = document.getElementById('playbackRate');
        const speedUp = document.getElementById('speedUp');
        const slowDown = document.getElementById('slowDown');
        const pause = document.getElementById('pause');
        const resume = document.getElementById('resume');
        //  更改内文字
        function updateSpeed() {
          playbackRate.innerHTML = `playbackRate: ${timeline.playbackRate.toFixed(1)}`;
        }
        //  加速
        speedUp.addEventListener('click', () => {
          timeline.playbackRate += 0.5;
          updateSpeed();
        });
        //  减速
        slowDown.addEventListener('click', () => {
          timeline.playbackRate -= 0.5;
          updateSpeed();
        });
        //  暂停
        pause.addEventListener('click', () => {
          timeline.playbackRate = 0;
          updateSpeed();
        });
        //  恢复
        resume.addEventListener('click', () => {
          timeline.playbackRate = 1.0;
          updateSpeed();
        });
        //  等待预加载资源完成
        await scene.preload([birdsRes, birdsJsonUrl]);
        //  循环生成内容
        for(let i = 0; i < 10; i++) {
          if(i !== 5 && i !== 9) {
            //  定义Sprite
            const bird = new Sprite('bird1.png');
            //  添加属性
            bird.attr({
              anchor: [0.5, 0.5],
              pos: [-50, 100 + (i % 5) * 80],
              scale: 0.6,
            });
            //  添加到图层
            layer.append(bird);
            //  小鸟自身动画
            bird.animate([
              {texture: 'bird1.png'},
              {texture: 'bird2.png'},
              {texture: 'bird3.png'},
              {texture: 'bird1.png'},
            ], {
              duration: 500,
              //  循环播放
              iterations: Infinity,
              //  过度直接变化
              easing: 'step-end',
            });
            //  生成延迟
            const delay = i < 5 ? Math.abs(2 - i) * 300 : (4 - Math.abs(7 - i)) * 300;
            //  小鸟移动动画
            bird.animate([
              {x: -50},
              {x: 1100},
              {x: -50},
            ], {
              delay,
              duration: 6000,
              // direction: 'alternate',
              iterations: Infinity,
            });
            //  小鸟转身动画
            bird.animate([
              {scale: [0.6, 0.6]},
              {scale: [-0.6, 0.6]},
              {scale: [0.6, 0.6]},
            ], {
              delay,
              duration: 6000,
              iterations: Infinity,
              easing: 'step-end',
            });
          }
        }
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