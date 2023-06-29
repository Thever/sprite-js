<template>
  <div class="about">
    <h1>transition添加过渡</h1>
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
      const {Scene, Arc} = spritejs;
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
      //  异步函数
      async function createBubble() {
        //  生成随机坐标和颜色
        const x = 100 + Math.random() * 1000,
          y = 100 + Math.random() * 400;
        const r = Math.round(255 * Math.random()),
          g = Math.round(255 * Math.random()),
          b = Math.round(255 * Math.random());
        //  生成颜色
        const fillColor = `rgb(${r},${g},${b})`;
        //  圆弧
        const bubble = new Arc();
        //  添加随机属性
        bubble.attr({
          fillColor,
          radius: 25,
          x,
          y,
        });
        //  图层添加内容
        layer.append(bubble);
        //  添加2S的异步动画
        await bubble.transition(2.0).attr({
          //  缩放
          scale: [2.0, 2.0],
          //  透明度
          opacity: 0,
        });
        //  完成后删除动画
        bubble.remove();
      }
      //  轮询
      setInterval(() => {
        createBubble();
      }, 50);
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