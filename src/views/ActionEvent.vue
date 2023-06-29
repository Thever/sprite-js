<template>
  <div class="about">
    <p>SpriteJS可以监听事件行为</p>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
// 本地导入json
// import * as birdsJsonUrl from '@/assets/5f6911b7b91c88da.json'
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
      const {Scene, Sprite, Label, Path} = spritejs;
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

      //  定义Sprite
      const s1 = new Sprite();
      s1.attr({
        //  锚点居中
        anchor: [0.5, 0.5],
        pos: [770, 300],
        size: [300, 300],
        rotate: 45,
        bgcolor: '#3c7',
      });
      layer.append(s1);

      // 根据事件绑定交互
      // eslint-disable-next-line no-unused-vars
      s1.addEventListener('mouseenter', (evt) => {
        s1.attr('border', [4, 'blue']);
      });
      // eslint-disable-next-line no-unused-vars
      s1.addEventListener('mouseleave', (evt) => {
        s1.attr('border', [0, '']);
      });

      //  定义Path
      const anchorCross = new Path('M-10,0H10M0,-10V10');
      anchorCross.attr({
        pos: [770, 300],
        strokeColor: 'red',
        rotate: 45,
        lineWidth: 4,
        pointerEvents: 'none',
      });

      layer.append(anchorCross);

      //  定义Label
      const label = new Label('鼠标位置：');
      label.attr({
        pos: [20, 50],
        font: '24px Arial',
        lineHeight: 56,
      });
      layer.append(label);
      
      //  绑定事件交互
      s1.addEventListener('mousemove', (evt) => {
        const {x, y} = evt;
        label.text = `鼠标位置：\n相对于锚点: ${s1.getOffsetPosition(x, y).map(Math.round)}`;
        //  组织事件冒泡
        evt.stopPropagation();
      });

      layer.addEventListener('mousemove', (evt) => {
        const {x, y} = evt;
        label.text = `鼠标位置：\n相对于 Layer: ${[Math.round(x), Math.round(y)]}`;
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