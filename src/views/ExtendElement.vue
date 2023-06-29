<template>
  <div class="about">
    <p>SpriteJS提供了监听事件的方法</p>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
// 本地导入json
// import * as birdsJsonUrl from '@/assets/5f6911b7b91c88da.json'
// 导入three 模块
// import * as THREE from 'three';

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
        width: 1200,
        height: 600,
      });
      //  图层
      const layer = scene.layer();

      //  生成Label默认属性
      const setDefault = Symbol.for('spritejs_setAttributeDefault');
      //  ButtonAttr 继承 Label 的 Attr
      class ButtonAttr extends Label.Attr {
        constructor(subject) {
          super(subject);
          this[setDefault]({
            text: ' ',
            fontSize: 36,
            lineHeight: 48,
            anchorX: 0.5,
            anchorY: 0.5,
            borderWidth: 1,
            borderColor: 'black',
            paddingRight: 10,
            paddingLeft: 10,
            textAlign: 'center',
          });
        }
      }

      //  Button 继承 Label，赋予默认属性
      class Button extends Label {
        //  声明静态属性 ButtonAttr
        static Attr = ButtonAttr;

        constructor(attrs = {}) {
          //  Button 继承 Label 的所有属性
          super(attrs);
          //  监听事件定义交互
          this.addEventListener('mousedown', () => {
            this.attr({scale: 0.9});
          });
          this.addEventListener('mouseup', () => {
            this.attr({scale: 1.0});
          });
          this.addEventListener('mouseenter', () => {
            this.layer.canvas.style.cursor = 'pointer';
          });
          this.addEventListener('mouseleave', () => {
            this.layer.canvas.style.cursor = '';
          });
        }
      }

      // //  使用继承的定义类
      // const button = new Button({
      //   text: '类实例化使用',
      //   pos: [600, 300],
      // });
      // //  添加到图层
      // layer.append(button);
      // //  监听实例点击
      // button.addEventListener('click', () => {
      //   console.log('button clicked');
      // });

      //  注册Node和实例化类一起使用会有问题
      //  spritejs中注册自定义节点
      spritejs.registerNode(Button, 'button');
      //  使用自定义元素
      const button2 = spritejs.createElement('button');

      //  更改
      button2.attr({
        text: '注册后使用',
        pos: [700, 200],
        //  覆盖默认样式
        borderColor: 'rgba(118,215,234,1)',
        fillColor: 'rgba(118,215,234,1)'
      })
      layer.append(button2);

      //  使用继承的定义类
      const button = new Button({
        text: '类实例化使用',
        pos: [600, 300],
      });
      //  添加到图层
      layer.append(button);
      //  监听实例点击
      button.addEventListener('click', () => {
        console.log('button clicked');
      });
    }
  }
}
</script>
<style scoped>
#stage{
  width:1200px;
  height:600px;
  background-color:#FFF;
  margin:0 auto;
  border:2px solid skyblue;
}
</style>