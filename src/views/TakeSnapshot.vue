<template>
  <div class="about">
    <p>SpriteJS提供了截图快照的方法</p>
    <div><button id="take-snapshot">存快照</button></div>
    <div id="stage"></div>
    <div id="snapshot-list"></div>
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
      //  引入资源
      const {Scene, Sprite, Path} = spritejs;
      //  容器
      const container = document.getElementById('stage');
      //  场景
      const scene = new Scene({
        container,
        width: 1200,
        height: 600,
      });
      //  图层
      const bglayer = scene.layer('bglayer');
      const fglayer = scene.layer('fglayer');

      //  异步方法
      (async function () {
        //  生成随机三角形
        function randomTriangle() {
          //  路径
          const triangle = new Path();
          //  随机位置
          const pos = [Math.random() * 1540, Math.random() * 600];
          //  路径属性
          const d = 'M0,0L0,10L8.66, 5z';
          //  路径添加属性
          triangle.attr({
            d,
            scale: 5,
            pos,
            fillColor: '#37c',
            rotate: Math.random() * 360,
          });
          //  添加到图层
          bglayer.append(triangle);
        }
        //  生成100个随机三角形
        for(let i = 0; i < 100; i++) {
          randomTriangle();
        }
        //  远程资源
        const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
        const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
        //  异步远程加载资源
        await scene.preload([birdsRes, birdsJsonUrl]);
        //  图片生成Sprite
        const bird = new Sprite('bird1.png');
        //  添加属性
        bird.attr({
          anchor: [0.5, 0.5],
          pos: [50, 200],
          scale: 0.6,
          //  指定不规则运动路径
          offsetPath: 'M0,100C0,100,200,-100,500,100S700,-100,1000,100S1200,-100,1700,100S2200,-100,2700,100',
        });
        //  添加到图层
        fglayer.append(bird);
        //  小鸟摇翅膀动画
        bird.animate([
          {texture: 'bird1.png'},
          {texture: 'bird2.png'},
          {texture: 'bird3.png'},
          {texture: 'bird1.png'},
        ], {
          duration: 300,
          iterations: Infinity,
          direction: 'alternate',
          easing: 'step-end',
        });
        //  小鸟移动路径动画
        bird.animate([
          {offsetDistance: 0},
          {offsetDistance: 1},
        ], {
          duration: 6000,
          iterations: Infinity,
        });

        //  获取DOM
        const snapshotBtn = document.getElementById('take-snapshot'),
          snapshotList = document.getElementById('snapshot-list');

        //  截屏
        // eslint-disable-next-line no-unused-vars
        snapshotBtn.addEventListener('click', async (evt) => {
          //  生成快照
          const canvas = await scene.snapshot();
          //  定义新 image
          const snapshot = new Image();
          //  使用快照Base64
          snapshot.src = canvas.toDataURL();
          //  创建 li 标签
          const listItem = document.createElement('li');
          //  li标签添加img
          listItem.appendChild(snapshot);
          //  ul添加li
          snapshotList.appendChild(listItem);
        });
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
  width:500px;
  height:500px;
  background-color:#FFF;
  margin:0 auto;
  border:2px solid skyblue;
}
</style>