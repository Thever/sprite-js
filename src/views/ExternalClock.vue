<template>
  <div class="about">
    <p>SpriteJS提供了外部时钟方法，可以控制渲染时机，这对很多三方库友好的</p>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
// 本地导入json
// import * as birdsJsonUrl from '@/assets/5f6911b7b91c88da.json'
// 导入three 模块
import * as THREE from 'three';

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
      const spriteScene = new Scene({
        container,
        width: 600,
        height: 600,
        //  关闭自动渲染，手动渲染
        autoRender: false,
        // contextType: 'webgl',
      });
      //  声明图层，后声明的图层放到上方
      const bglayer = spriteScene.layer('bglayer');
      const fglayer = spriteScene.layer('fglayer');

      //  图片
      const imgUrl = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png';
      //  图片生成sprite
      const sprite = new Sprite({
        texture: imgUrl,
        pos: [300, 300],
        anchor: 0.5,
      });
      //  添加到图层
      bglayer.append(sprite);

      /* 使用three.js */
      // 场景
      const scene = new THREE.Scene();
      // 摄像机
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      // 渲染器
      const renderer = new THREE.WebGLRenderer({
        canvas: fglayer.canvas,
        //  开启背景透明，不然背景会为黑色
        alpha: true,
      });
      //  立方体
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      //  mesh绿色材质
      const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
      //  创建对象
      const cube = new THREE.Mesh(geometry, material);
      //  添加到场景
      scene.add(cube);
      //  设置相机位置
      camera.position.z = 5;
      //  定义更新方法
      function update() {
        //  更改背景图层
        bglayer.render();
        //  改变位置
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        //  three.js重新渲染
        renderer.render(scene, camera);
        //  执行外部时钟
        requestAnimationFrame(update);
        //  使用图层方法调用外部时钟方法，没成功
        // fglayer.tick((t, p) => {
        //   // do something...
        //   console.log(`layer.tick调用了`)
        //   console.log({t, p})
        //   update()
        // }, {duration: 1000, playbackRate: 1});
      }
      //  调用
      update();
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