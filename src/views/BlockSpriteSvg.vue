<template>
  <div class="about">
    <h1>SpriteSvg 元素继承自 Sprite 元素，可以给定一个 Svg 图片。SpriteSvg 元素可以和 D3 配合，方便地渲染坐标轴。</h1>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
import * as d3 from 'd3';
export default {
  name: 'BlockBorderRaduis',
  components: {
  },
  mounted() {
    this.init()
  },  
  methods: {
    init() {
      //  导入资源
      const {Scene, SpriteSvg} = spritejs;
      //  容器
      const container = document.getElementById('stage');
      //  场景
      const scene = new Scene({
        container,
        width: 1200,
        height: 1200,
      });
      //  数据
      const dataset = [125, 121, 127, 193, 309];
      //  d3配置
      const scale = d3.scaleLinear()
        .domain([100, d3.max(dataset)])
        .range([0, 500]);
      //  颜色配置
      const colors = ['#fe645b', '#feb050', '#c2af87', '#81b848', '#55abf8'];
      //  图层
      const fglayer = scene.layer('fglayer');
      //  d3配置图层
      const s = d3.select(fglayer);
      //  设置背景色
      document.querySelector('#stage canvas').style.backgroundColor = '#eee';
      //  绘制表格
      const chart = s.selectAll('sprite')
        .data(dataset)
        .enter()
        .append('sprite')
        .attr('x', 450)
        .attr('y', (d, i) => {
          return 200 + i * 95;
        })
        .attr('width', 0)
        .attr('height', 80)
        .attr('bgcolor', '#ccc');

      chart.transition()
        .duration(2000)
        // eslint-disable-next-line no-unused-vars
        .attr('width', (d, i) => {
          return scale(d);
        })
        .attr('bgcolor', (d, i) => {
          return colors[i];
        });

      // const axis = d3.axisBottom(scale).tickValues([100, 200, 300, 400]);
      // const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      // svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      // d3.select(svg)
      //   .attr('width', 600)
      //   .attr('height', 60)
      //   .append('g')
      //   .attr('transform', 'translate(30, 0)')
      //   .call(axis);
      // svg.children[0].setAttribute('font-size', 20);
      // const blob = new Blob([svg.outerHTML], {type: 'image/svg+xml'});
      // const textureURL = URL.createObjectURL(blob);
      // const axisNode = new Sprite(textureURL);
      // axisNode.attr({
      //   x: 420,
      //   y: 680,
      // });
      // fglayer.append(axisNode);

      // 3.4 之后增加了 SpriteSvg 元素
      // 配置SpriteSvg
      const axis = d3.axisBottom(scale).tickValues([100, 200, 300, 400]);
      const axisNode = new SpriteSvg({
        x: 420,
        y: 680,
      });
      d3.select(axisNode.svg)
        .attr('width', 600)
        .attr('height', 60)
        .append('g')
        .attr('transform', 'translate(30, 0)')
        .call(axis);

      axisNode.svg.children[0].setAttribute('font-size', 20);
      //  添加到图层
      fglayer.append(axisNode);
      //  绑定事件
      chart.on('click', (data) => {
        /* eslint-disable no-console */
        console.log(data, d3.event);
        /* eslint-enable no-console */
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