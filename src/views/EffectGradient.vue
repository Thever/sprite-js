<template>
  <div class="about">
    <p>SpriteJS Next 通过Gradient类创建渐变，根据vector参数个数不同，分别创建LinearGradient和RadialGradient。</p>
    <b>目前版本暂时有个缺陷，不能给同一个元素的stroke和fill同时设置渐变，后续版本中可能会修正。</b>
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
      const {Scene, Sprite, Gradient, Label, Path} = spritejs;
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
      //  Sprite渐变
      const box = new Sprite();
      box.attr({
        borderWidth: 10,
        //  边框渐变
        // borderColor: new Gradient({
        //   vector: [0, 0, 170, 170],
        //   colors: [
        //     {offset: 0, color: 'red'},
        //     {offset: 0.5, color: 'yellow'},
        //     {offset: 1, color: 'green'},
        //   ],
        // }),
        borderColor: 'green',
        //  背景渐变
        //  边框渐变和背景渐变目前版本不能同时使用
        bgcolor: new Gradient({
          vector: [0, 150, 150, 0],
          colors: [
            {offset: 0, color: '#fff'},
            {offset: 0.5, color: 'rgba(33, 33, 77, 0.7)'},
            {offset: 1, color: 'rgba(128, 45, 88, 0.5)'},
          ],
        }),
        pos: [150, 50],
        size: [150, 150],
        borderRadius: 15,
      });

      layer.append(box);
      //  label渐变
      const label = new Label('Hello SpriteJS~~');
      label.attr({
        lineWidth: 6,
        fillColor: new Gradient({
          vector: [35, 35, 50, 350, 350, 600],
          colors: [
            {offset: 0, color: '#777'},
            {offset: 0.5, color: '#ccc'},
            {offset: 1, color: '#333'},
          ],
        }),
        pos: [500, 50],
        font: '48px Arial',
      });
      layer.append(label);

      //  path渐变
      const path = new Path();
      path.attr({
        d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
        normalize: true,
        rotate: 30,
        scale: 0.7,
        fillColor: new Gradient({
          vector: [300, 300, 100, 100],
          colors: [
            {offset: 0, color: 'red'},
            {offset: 0.5, color: 'yellow'},
            {offset: 1, color: 'green'},
          ],
        }),
        pos: [700, 360],
      });

      layer.append(path);
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