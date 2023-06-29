<template>
  <div class="about">
    <h1>块元素和HTML一样可以设置borderRaduis</h1>
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
        width: 600,
        height: 360,
        // contextType: '2d',
      });
      //  图层
      const layer = scene.layer();
      //  添加块级元素sprite
      const box = new Sprite({
        anchor: [0.5, 0.5],
        size: [150, 150],
        pos: [300, 180],
        //  背景色
        bgcolor: 'skyblue',
        //  边框宽度
        borderWidth: 2,
        //  边框颜色
        // borderColor: 'red',
        borderColor: 'rgba(140,154,23,1)',
        //  边框圆角(统一设置)
        // borderRadius: 20,
        //  单独设置角度，数组形式，先横后竖
        borderTopLeftRadius: [10,30],
        borderTopRightRadius: [10,30],
        borderBottomLeftRadius: [10,30],
        borderBottomRightRadius: [10,30],
        //  设置虚线框
        // borderDash: true,
      });
      //  图层添加sprite
      layer.append(box);
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