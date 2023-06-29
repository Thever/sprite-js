<template>
  <div class="about">
    <h1>SpriteSvg直接渲染Svg</h1>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
// import * as d3 from 'd3';
export default {
  name: 'BlockBorderRaduis',
  components: {
  },
  mounted() {
    this.init()
  },  
  methods: {
    init() {
      const container = document.getElementById('stage');
      const scene = new spritejs.Scene({
        container,
        displayRatio: 2,
        width: 1200,
        height: 600,
        mode: 'stickyHeight',
      });

      //  网络资源
      // const svgURL = 'https://s1.ssl.qhres2.com/static/9bd74da7f533f462.svg';
      //  本地资源
      const svgURL = require('@/assets/cat.svg');


      const fglayer = scene.layer('fglayer');
      const root = new spritejs.SpriteSvg(svgURL);
      root.attr({
        x: 100,
        y: 100,
        // 自适应
        flexible: true,
        // 缩放
        scale: 0.5,
      });

      fglayer.append(root);
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