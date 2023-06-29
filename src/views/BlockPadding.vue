<template>
  <div class="about">
    <h1>block可以用padding来设置内边距</h1>
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
      const {Scene, Label} = spritejs;
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
      //  label继承block
      const box = new Label({
        text: 'SpriteJS',
        fontSize: '2rem',
        anchor: [0.5, 0.5],
        pos: [300, 180],
        bgcolor: 'white',
        borderWidth: 1,
        //  统一设置
        // padding: 25,
        //  单独设置，上右下左
        // padding: [25,20,15,10],
        //  指定属性设置
        paddingTop: 25,
        paddingRight: 20,
        paddingBottom: 15,
        paddingLeft: 15,
      });
      //  图层上添加内容
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