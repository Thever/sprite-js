<template>
  <div class="about">
    <h1>SpriteJs的内容类似html中的盒子模型</h1>
    <img src="@/assets/boxSizing.jpg">
    <div id="stage"></div>
    <!-- 打印属性整体对象可以查看到，直接打印属性就显示[0,0] -->
    <!-- <p>SpriteJS.contentSize: {{ box ? box.contentSize[0] + ',' + box.contentSize[1] : '' }}</p> -->
    <!-- <p>SpriteJS 2.contentSize: {{ box2 ? box2.contentSize[0] + ',' + box2.contentSize[1] : '' }}</p> -->
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
export default {
  name: 'BlockBorderRaduis',
  components: {
  },
  data() {
    return {
      box: undefined,
      box2: undefined
    }
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
        pos: [300, 100],
        bgcolor: 'white',
        //  content-box border-box
        boxSizing: 'content-box',
        borderWidth: 10,
        //  统一设置
        // padding: 25,
        //  单独设置，上右下左
        padding: [25,20,25,20],
        //  指定属性设置
        // paddingTop: 25,
        // paddingRight: 20,
        // paddingBottom: 15,
        // paddingLeft: 15,
      });
      const box2 = new Label({
        text: 'SpriteJS',
        fontSize: '2rem',
        anchor: [0.5, 0.5],
        pos: [300, 220],
        bgcolor: 'white',
        //  content-box border-box
        boxSizing: 'border-box',
        borderWidth: 10,
        //  统一设置
        // padding: 25,
        //  单独设置，上右下左
        padding: [25,20,25,20],
        //  指定属性设置
        // paddingTop: 25,
        // paddingRight: 20,
        // paddingBottom: 15,
        // paddingLeft: 15,
      });
      //  图层上添加内容
      layer.append(box);
      layer.append(box2);
      this.box = box
      this.box2 = box2
      console.log(box)
      console.log(box2)
      console.log(this.box)
      console.log(this.box2)
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