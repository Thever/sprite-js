<template>
  <div class="about">
    <p>layer.timeline 可以控制整个图层上的播放速度</p>
    <div id="timeline-ctrl">
      <button id="speed1">原速</button>
      <button id="speed2">2倍速</button>
      <button id="speed4">4倍速</button>
      <button id="halfSpeed">½倍速</button>
      <button id="pause">静止</button>
      <button id="reversePlay">倒放</button>
    </div>
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
      const {Scene, Sprite} = spritejs;
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
      //  异步函数
      (async function () {
        //  预加载资源并命名id
        await scene.preload({id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'});

        //  获取Dom对象
        const [speed1, speed2, speed4, halfSpeed, pause, reversePlay] = document.querySelectorAll('#speed1, #speed2, #speed4, #halfSpeed, #pause, #reversePlay');

        //  获取时间线
        const timeline = layer.timeline;

        //  1倍速按钮
        // eslint-disable-next-line no-unused-vars
        speed1.addEventListener('click', (evt) => {
          timeline.playbackRate = 1.0;
        });

        // 2倍速按钮
        // eslint-disable-next-line no-unused-vars
        speed2.addEventListener('click', (evt) => {
          timeline.playbackRate = 2.0;
        });

        //  4倍速按钮
        // eslint-disable-next-line no-unused-vars
        speed4.addEventListener('click', (evt) => {
          timeline.playbackRate = 4.0;
        });

        //  0.5倍速按钮
        // eslint-disable-next-line no-unused-vars
        halfSpeed.addEventListener('click', (evt) => {
          timeline.playbackRate = 0.5;
        });

        //  0倍速按钮
        // eslint-disable-next-line no-unused-vars
        pause.addEventListener('click', (evt) => {
          timeline.playbackRate = 0;
        });

        //  倒放按钮
        // eslint-disable-next-line no-unused-vars
        reversePlay.addEventListener('click', (evt) => {
          timeline.playbackRate = -1.0;
        });

        //  随机生成雪花
        function addRandomSnow() {
          //  指定id使用加载的雪花图片，生成Sprite
          const snow = new Sprite('snow');
          //  随机生成位置
          const x0 = 20 + Math.random() * 1100,
            y0 = -100;
          //  Sprite添加属性
          snow.attr({
            anchor: [0.5, 0.5],
            pos: [x0, y0],
            size: [50, 50],
          });
          //  Sprite添加左右飘动动画
          snow.animate([
            {x: x0 - 10},
            {x: x0 + 10},
          ], {
            duration: 1000,
            fill: 'forwards',
            direction: 'alternate',
            iterations: Infinity,
            easing: 'ease-in-out',
          });

          //  Sprite添加飘落加旋转动画
          const dropAnim = snow.animate([
            {y: -100, rotate: 0},
            {y: 700, rotate: 360},
          ], {
            duration: 10000,
            fill: 'forwards',
          });
          //  飘落动画完成后移除
          dropAnim.finished.then(() => {
            snow.remove();
          });
          //  添加到图层
          layer.append(snow);
        }
        //  周期生成下落雪花
        setInterval(addRandomSnow, 200);
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
</style>