<template>
  <div class="about">
    <h1>绘制尺寸</h1>
    <div>默认scene尺寸是与渲染容器一致的，不如不一致避免被拉伸形变，可以设置scence.mode,参数有</div>
    <ul>
      <li>scale 默认值，将canvas拉伸到container大小，因为拉伸，画布可能会变形</li>
      <li>stickyWidth 将canvas宽度设为container宽度，高度随比例适配，并垂直居中</li>
      <li>stickyTop 将canvas宽度设为container宽度，高度随比例适配，并与container顶部对齐</li>
      <li>stickyBottom 将canvas宽度设为container宽度，高度随比例适配，并与container底部对齐</li>
      <li>stickyHeight 将canvas高度设为container高度，宽度随比例适配，并水平居中</li>
      <li>stickyLeft 将canvas高度设为container高度，宽度随比例适配，并与container左边对齐</li>
      <li>stickyRight 将canvas高度设为container高度，宽度随比例适配，并与container右边对齐</li>
    </ul>
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
      //  导入资源
      const {Scene, Sprite} = spritejs;
      //  容器
      const container = document.getElementById('stage');
      //  场景
      const scene = new Scene({
        container,
        width: 900,
        height: 900,
        mode: 'scale',
      });
      //  图层
      const layer = scene.layer();
      //  循环向图层添加内容
      for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
          const brick = new Sprite();
          const bgcolor = (i + j) % 2 ? 'black' : 'white';
          brick.attr({
            size: [100, 100],
            pos: [i * 100 - 50, j * 100 - 50],
            bgcolor,
          });

          layer.append(brick);
        }
      }
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