<template>
  <div class="about">
    <h1>transition添加过渡,reverse可以让过渡状态回滚</h1>
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
      });
      //  图层
      const layer = scene.layer();
      //  提示文字
      const label = new Label('试试将鼠标移动到左右两个方块上：');
      label.attr({
        anchor: 0.5,
        pos: [400, 50],
        fontSize: '2rem',
      });
      layer.append(label);
      //  左侧方块
      const left = new Sprite();
      left.attr({
        anchor: 0.5,
        pos: [300, 300],
        size: [200, 200],
        bgcolor: 'red',
      });
      layer.append(left);
      //  右侧方块
      const right = left.cloneNode();
      right.attr({
        pos: [700, 300],
        bgcolor: 'green',
      });
      layer.append(right);
      //  定义左侧过度动画  
      let leftTrans = null;
      //  鼠标进入
      // eslint-disable-next-line no-unused-vars
      left.addEventListener('mouseenter', (evt) => {
        //  如果存在过度效果就取消
        if(leftTrans) leftTrans.cancel();
        //  创建左侧方块过度时间为1秒的过度
        leftTrans = left.transition(1.0);
        //  过度的属性
        leftTrans.attr({
          rotate: 180,
          bgcolor: 'green',
        });
      });
      //  鼠标离开
      // eslint-disable-next-line no-unused-vars
      left.addEventListener('mouseleave', (evt) => {
        //  将属性恢复
        leftTrans.attr({
          rotate: 0,
          bgcolor: 'red',
        });
      });
      //  定义右侧过度动画
      let rightTrans = null;
      //  鼠标移入
      // eslint-disable-next-line no-unused-vars
      right.addEventListener('mouseenter', (evt) => {
        //  如果存在右侧过度就取消
        if(rightTrans) rightTrans.cancel();
        //  创建右侧方块过度时间为3秒的过度动画
        rightTrans = right.transition(3.0);
        //  过度动画的属性
        rightTrans.attr({
          rotate: 720,
          bgcolor: 'red',
        });
      });
      // 鼠标移出
      // eslint-disable-next-line no-unused-vars
      right.addEventListener('mouseleave', (evt) => {
        //  直接调用回滚方法重置状态
        rightTrans.reverse();
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