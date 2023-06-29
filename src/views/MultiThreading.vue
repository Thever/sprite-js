<template>
  <div class="about">
    <p>SpriteJS Next 支持 OffscreenCanvas 和多线程，我们可以给 Layer 设置参数 {worker: URL} 来创建一个在 worker 中运行的 Layer。</p>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
// import * as spritejs from 'spritejs';
// import worker from '@/assets/worker'
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
      // const container = document.getElementById('stage');
      // const scene = new spritejs.Scene({
      //   container,
      //   width: 1200,
      //   height: 600,
      // });
      // scene.layer('fglayer', {worker: worker});
      console.log(`sprite.js原本的worker展示案例存在问题`)
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
#paper{
  width:500px;
  height:500px;
  background-color:#FFF;
  margin:0 auto;
  border:2px solid skyblue;
}
</style>