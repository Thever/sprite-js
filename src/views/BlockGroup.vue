<template>
  <div class="about">
    <h1>Group用来设置分组</h1>
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
      const {Scene, Group, Path} = spritejs;
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
      //  绘制路径
      const arcD = 'M0 0L 50 0A50 50 0 0 1 43.3 25z';
      //  分组
      const group = new Group();
      //  分组配置
      group.attr({
        size: [300, 300],
        pos: [600, 300],
        anchor: [0.5, 0.5],
        bgcolor: '#cec',
        borderRadius: 150,
      });
      //  图层添加分组
      layer.append(group);
      //
      for(let i = 0; i < 6; i++) {
        //  定义svg路径
        const arc = new Path();
        //  添加属性
        arc.attr({
          d: arcD,
          scale: 3,
          anchor: [0, 0.5],
          strokeColor: 'red',
          fillColor: `rgb(${i * 99 % 255}, 0, 0)`,
          rotate: i * 60,
        });
        //  路径添加到分组
        group.append(arc);
      }
      //  分组添加渲染动画
      group.animate([
        {rotate: 0},
        {rotate: 360},
      ], {
        duration: 3000,
        iterations: Infinity,
      })
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