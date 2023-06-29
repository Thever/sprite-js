<template>
  <div class="about">
    <p>SpriteJS提供了监听事件的方法</p>
    <div id="stage"></div>
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
      const {Scene, Label, Sprite} = spritejs;
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
      // 键盘数组
      const keys = [
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm',
      ];
      //  生成键盘
      for(let i = 0; i < 3; i++) {
        const keyButtons = [...keys[i]];
        for(let j = 0; j < keyButtons.length; j++) {
          const key = new Label({
            id: keyButtons[j],
            text: keyButtons[j],
            pos: [250 + j * 80, 200 + i * 100],
            font: '42px Arial',
            borderWidth: 4,
            borderColor: 'black',
            size: [50, 50],
            anchor: [0.5, 0.5],
            textAlign: 'center',
            lineHeight: 50,
          });
          layer.append(key);
        }
      }
      //  监听页面按键事件
      document.addEventListener('keydown', (event) => {
        const key = event.key;
        const button = scene.getElementById(key);
        button.attr({
          bgcolor: 'grey',
          fillColor: 'white',
        });
      });
      document.addEventListener('keyup', (event) => {
        const key = event.key;
        const button = scene.getElementById(key);
        button.attr({
          bgcolor: '',
          fillColor: 'black',
        });
      });
      //  声明sprite
      const s1 = new Sprite({
        pos: [1000, 500],
        size: [200, 200],
        anchor: 0.5,
        bgcolor: 'red',
      });
      const s2 = new Sprite({
        pos: [1000, 500],
        size: [200, 200],
        anchor: 0.5,
        bgcolor: 'blue',
        rotate: 45,
      });

      //  渲染前
      s2.addEventListener('beforerender', ({detail}) => {
        console.log(`beforerender`)
        const gl = detail.context;
        gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ZERO, gl.ONE);
      });

      //  渲染后
      s2.addEventListener('afterrender', ({detail}) => {
        console.log(`afterrender`)
        const gl = detail.context;
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      });
      //  添加到图层
      layer.append(s1, s2);
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