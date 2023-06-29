<template>
  <div class="about">
    <h1>sprite.transition(sec).attr(...)可以实现动画效果</h1>
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
      //  调用异步函数
      (async function () {
        //  定义Sprite模块
        const sprite = new Sprite({
          anchor: 0.5,
          bgcolor: 'red',
          pos: [500, 300],
          size: [200, 200],
          borderRadius: 50,
        });
        //  添加到图层
        layer.append(sprite);
        //  执行动画1
        await sprite.transition(2.0)
          .attr({
            bgcolor: 'green',
            width: width => width + 100,
          });
        //  执行动画2
        await sprite.transition(1.0)
          .attr({
            bgcolor: 'orange',
            height: height => height + 100,
          });
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