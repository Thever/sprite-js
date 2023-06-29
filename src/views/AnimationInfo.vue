<template>
  <div class="about">
    <p>sprite.animate方法返回一个animation对象，playState属性包含不同的状态</p>
    <ul>
      <li>idle:当前动画未开始</li>
      <li>pending:当前动画已开始未结束，但元素还未运动或已运动结束</li>
      <li>running:当前动画正在运行</li>
      <li>paused:当前动画被暂停</li>
      <li>finished:当前动画已结束</li>
    </ul>
    <p>sipte.animate传入两个参数,关键帧序列和一个timeing对象</p>
    <p>关键帧序列:更改的对应属性，多个变化可以用[a,b]数组形式包裹</p>
    <p>timeing对象包含:</p>
    <ul>
      <li>delay	Number	0	动画多长时间后开始运行，单位是毫秒</li>
      <li>endDelay	Number	0	动画执行完毕后多长时间之后结束，单位是毫秒</li>
      <li>fill	枚举: 'none', 'forwards', 'backwards', 'both'	'none'	如果这个属性为'none'，那么元素的动画效果只有在'running'和'paused'状态时有效，在其他状态下元素回到动画前状态。如果这个属性为 'forwards'，那么动画结束后，元素保持在动画结束时的状态。如果这个属性为'backwards'，那么动画处于开始前pending状态时，元素保持在动画第一帧的状态。如果这个属性为'both'，那么元素在动画开始前保持第一帧状态，并在动画结束后保持最后一帧状态。</li>
      <li>terations	Number	1	动画播放的次数，可以是整数，也可以是小数, 无限播放用Infinity</li>
      <li>direction	枚举: 'default', 'reverse', 'alternate', 'alternate-reverse'	'default'	动画播放的方向，默认是正向播放，如果该属性设置为'reverse'，则动画反向播放，如果设置为alternate，则在iterations > 1的时候正反交替播放</li>
      <li>duration	Number	0	动画播放一次的时长</li>
      <li>easing	String	'linear'	动画的easing函数，可以是linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end或者cubic-bezier函数比如cubic-bezier(0.42, 0, 0.58, 1)</li>
    </ul>
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
      const {Scene, Sprite} = spritejs;
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
      //  Sprite对象
      const sprite = new Sprite();
      sprite.attr({
        anchor: [0.5, 0.5],
        pos: [600, 300],
        bgcolor: 'red',
        size: [50, 50],
        borderRadius: 25,
        translate: [0, -200],
        transformOrigin: [0, 200],
      });
      //  添加动画
      let check = sprite.animate([
        {rotate: 0},
        {rotate: 360},
      ], {
        duration: 3000,
        iterations: Infinity,
      });
      console.log(`查看sprite.animate返回对象`)
      console.log(check.playState)
      // check.playbackRate = 4
      //  添加到图层
      layer.append(sprite);
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