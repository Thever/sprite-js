<template>
  <div class="about">
    <h1>scene.preload可以预加载图片资源</h1>
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
      const {Scene, Sprite, Label} = spritejs;
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

      //  包裹异步函数并回调
      (async function () {
        //  预加载资源
        await scene.preload({
          //  指定加载的资源内容
          id: 'robot2',
          src: 'https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png',
        });

        //  使用加载好的图片生成Sprite
        //  注意这里用对应的id来指定使用的资源
        const robot = new Sprite('robot2');
        robot.attr({
          anchor: [0.5, 0.5],
          pos: [600, 300],
          scale: 0.5,
        });
        layer.append(robot);

        //  创建label展示文件大小
        const label = new Label(`图片大小： ${robot.contentSize}`);
        label.attr({
          anchor: [0.5, 0.5],
          pos: [600, 100],
          font: '36px Arial',
        });
        layer.append(label);
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