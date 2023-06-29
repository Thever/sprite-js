<template>
  <div class="about">
    <h1>Label用来绘制文字</h1>
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
      const {Scene, Label} = spritejs;
      //  引入容器
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
      //  文字1
      const text1 = new Label('SpriteJS.org');
      text1.attr({
        pos: [100, 40],
        fillColor: '#707',
        font: 'oblique small-caps bold 56px Arial',
        border: [2.5, '#ccc'],
      });
      layer.append(text1);
      //  文字二
      const text2 = new Label('从前有座灵剑山');
      text2.attr({
        pos: [500, 20],
        fillColor: '#077',
        font: '64px "宋体"',
        lineHeight: 112,
        textAlign: 'center',
        padding: [0, 30],
        border: [2.5, '#ccc'],
      });
      layer.append(text2);
      //  文字3
      const text3 = new Label('Hello');
      text3.attr({
        pos: [100, 240],
        strokeColor: 'red',
        font: 'bold oblique 70px Microsoft Yahei',
        strokeWidth: 1,
        textAlign: 'center',
        padding: [0, 30],
        border: [2.5, '#ccc'],
      });
      layer.append(text3);
      //  封装路径切割方法
      function createClockTexts(text, x, y) {
        const len = text.length;
        for(let i = 0; i < len; i++) {
          const char = text.charAt(i);
          const label = new Label(char);
          label.attr({
            anchor: [0.5, 4.5],
            pos: [x, y],
            font: 'bold 44px Arial',
            fillColor: '#37c',
            rotate: i * 360 / len,
          });

          layer.append(label);
        }
      }
      //  调用
      createClockTexts('Sprite.js JavaScript Canvas...', 700, 360);
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