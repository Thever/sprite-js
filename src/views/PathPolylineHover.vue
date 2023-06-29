<template>
  <div class="about">
    <h1>Polyline没有过度动画，但是可以监听事件来修改属性来进行交互</h1>
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
      const {Scene, Polyline} = spritejs;
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
      //  绘制折线
      const line = new Polyline({
        borderWidth: 1,
        //  起始点位
        pos: [250, 50],
        //  相对于起始点位的位置，(x,y) 两个为一组,至少包含2组坐标才生效
        points: [0, 0, 100, 100, 200, 0, 300, 100, 400, 0, 500, 100, 600, 0],
        strokeColor: 'blue',
        lineWidth: 3,
        //  闭合，形成多边形
        // close: true,
        //  平滑
        smooth: true,
      });
      layer.append(line);
      console.log({ line })
      
      //  鼠标移入
      // eslint-disable-next-line no-unused-vars
      line.addEventListener('mouseenter', (evt) => {
        //  直接更改对应属性
        line.attr({
          // smooth: true,
          strokeColor: 'red',
          lineWidth: 6,
        })
      });
      // 鼠标移出
      // eslint-disable-next-line no-unused-vars
      line.addEventListener('mouseleave', (evt) => {
        line.attr({
          // smooth: false,
          strokeColor: 'blue',
          lineWidth: 3,
        })
      });
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