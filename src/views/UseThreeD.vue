<template>
  <div class="about">
    <h1>SpriteJSNext提供了3D扩展，借助它可以加载并渲染3D模型，这样SpriteJS就可以不借助其他框架和库，独立完成3D渲染。</h1>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
export default {
  name: 'DrawingSize',
  components: {
  },
  mounted() {
    this.init()
  },  
  methods: {
    init() {
      //  引入资源
      const {Scene} = spritejs;
      console.log({ spritejs })
      //  目前引入的spritejs并不包含ext3d
      if (!spritejs.ext3d) {
        return false
      }
      //  3D属性方法
      if (!spritejs.ext3d) {
        return false
      }
      const {Cylinder, Sphere, Cube, shaders} = spritejs.ext3d;
      //  容器
      const container = document.getElementById('container');
      //  场景
      const scene = new Scene({
        container,
        displayRatio: 2,
      });
      //  加载3D配置
      const layer = scene.layer3d('fglayer', {
        //  平行光
        directionalLight: [1, 0, 0],
        directionalLightColor: [1, 1, 1, 0.5],
        //  点光
        pointLightColor: `hsl(${Math.floor(360 * Math.random())}, 50%, 50%)`,
        pointLightPosition: [5, 3, 6],
        //  相机
        camera: {
          //  中心
          fov: 35,
        },
      });
      
      //  相机位置
      layer.camera.attributes.pos = [5, 3, 6];
      layer.camera.lookAt([0, 0, 0]);

      //  声明 Program
      const program = layer.createProgram({
        ...shaders.NORMAL_GEOMETRY,
        cullFace: null,
      });

      //  声明圆柱体
      const cylinder = new Cylinder(program);
      cylinder.attributes.pos = [0, 1.3, 0];
      layer.append(cylinder);
      cylinder.animate([
        {rotateY: 0},
        {rotateY: -360},
      ], {
        duration: 10000,
        iterations: Infinity,
      });

      //  声明半球体
      const sphere = new Sphere(program);
      sphere.attr({
        phiLength: Math.PI,
      });
      layer.append(sphere);
      sphere.animate([
        {rotateY: 0},
        {rotateY: -360},
      ], {
        duration: 7500,
        iterations: Infinity,
      });

      //  声明立方体
      const cube = new Cube(program);
      cube.attributes.pos = [0, -1.3, 0];
      layer.append(cube);
      cube.animate([
        {rotateY: 0},
        {rotateY: -360},
      ], {
        duration: 5000,
        iterations: Infinity,
      });

      //  图层开启碰撞监测
      layer.setRaycast();

      //  图层添加监听
      layer.addEventListener('click', (evt) => {
        if(evt.target === cube) {
          //  立方体
          const colors = [];
          for(let i = 0; i < 3; i++) {
            const randomColor = `hsl(${Math.floor(360 * Math.random())}, 50%, 50%)`;
            colors.push(randomColor, randomColor);
          }
          evt.target.attributes.colors = colors;
        } else if(evt.target !== layer) {
          //  非立方体
          evt.target.attributes.colors = `hsl(${Math.floor(360 * Math.random())}, 50%, 50%)`;
        }
      });
    }
  }
}
</script>
<style scoped>
#stage{
  width:900px;
  height:900px;
  background-color:skyblue;
  margin:0 auto;
  border:2px solid skyblue;
}
</style>