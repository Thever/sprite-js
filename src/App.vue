<template>
  <div id="app">
    <nav>
      <router-link to="/">基本使用</router-link>
      <br />
      <router-link to="/drawingsize">坐标-绘制尺寸</router-link>
      <br />
      <router-link to="/blockanchor">块元素-锚点</router-link> |
      <router-link to="/blockborderraduis">块元素-边框</router-link> |
      <router-link to="/blockpadding">块元素-内边距</router-link> |
      <router-link to="/blockwidthheight">块元素-盒子模型与宽高</router-link> |
      <router-link to="/blocksprite">块元素-精灵图Sprite</router-link> |
      <router-link to="/blocklabel">块元素-标题Label</router-link> |
      <router-link to="/blockgroup">块元素-分组Group</router-link> |
      <router-link to="/blockspritesvg">块元素-SpriteSvg-配合d3使用</router-link> |
      <router-link to="/blockspritesvgpure">块元素-SpriteSvg-渲染svg</router-link> |
      <br />
      <router-link to="/pathpath">路径元素-路径</router-link> |
      <router-link to="/pathclip">路径元素-切割图片</router-link> |
      <router-link to="/pathrect">路径元素-矩形</router-link> |
      <router-link to="/pathtriangleparallel">路径元素-三角形和平行四边形</router-link> |
      <router-link to="/pathpolyline">路径元素-Polyline绘制折线和多边形</router-link> |
      <router-link to="/pathregularstar">路径元素-Regular正多边形和Star星形</router-link> |
      <router-link to="/patharcellipse">路径元素-Arc圆弧和Ellipse椭圆弧</router-link> |
      <router-link to="/pathring">路径元素-Ring圆环</router-link> |
      <br />
      <router-link to="/effecttransition">效果-过度</router-link> |
      <router-link to="/effecttransitioncontrol">效果-过度控制</router-link> |
      <router-link to="/pathpolylinehover">效果-连线hover交互动画</router-link> |
      <router-link to="/effectanimate">效果-动画</router-link> |
      <router-link to="/effectanimatecontrol">效果-动画控制</router-link> |
      <router-link to="/effectfilter">效果-滤镜</router-link> |
      <router-link to="/effectgradient">效果-渐变</router-link> |
      <br />
      <router-link to="/actionevent">行为-事件</router-link>
      <br />
      <span>高级用法:</span> 
      <router-link to="/enginememory">引擎和内存</router-link> |
      <router-link to="/drawingsize">屏幕适配</router-link> |
      <router-link to="/preloadimage">加载图片</router-link> |
      <router-link to="/preloadsprite">加载精灵图</router-link> |
      <router-link to="/preloadresource">加载一系列资源</router-link> |
      <router-link to="/animationchange">形变动画</router-link> |
      <router-link to="/animationhover">交互动画</router-link> |
      <router-link to="/animationinfo">动画参数</router-link> |
      <router-link to="/animationtimeline">动画时间线</router-link> |
      <router-link to="/externalclock">外部时钟</router-link> |
      <router-link to="/eventlisteners">事件监听</router-link> |
      <router-link to="/extendelement">继承元素类型</router-link> |
      <router-link to="/improveperformance">提升性能</router-link> |
      <router-link to="/takesnapshot">快照</router-link> |
      <router-link to="/multithreading">多线程</router-link> |
      <router-link to="/useshade">使用shade</router-link> |
      <router-link to="/usethreed">使用3D</router-link> |
      <br />
      <router-link to="/tts">tts</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
