<template>
  <div class="about">
    <h1>SpriteJSNext在WebGL/WebGL2模式下，可以支持自定义Shader，这样我们就可以创建自定义的渲染模式。</h1>
    <div id="stage"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import * as spritejs from 'spritejs';
export default {
  name: 'DrawingSize',
  components: {
  },
  mounted() {
    this.init()
  },  
  methods: {
    init() {
      //  shade1
      const vertex = `
        attribute vec3 a_vertexPosition;
        // attribute vec4 a_color;
        // varying vec4 vColor;

        uniform mat3 viewMatrix;
        uniform mat3 projectionMatrix;

        void main() {
          gl_PointSize = 1.0;
          vec3 pos = projectionMatrix * viewMatrix * vec3(a_vertexPosition.xy, 1.0);
          gl_Position = vec4(pos.xy, 1.0, 1.0);
          // vColor = a_color;
        }
      `;
      //  shade2
      const fragment = `
      precision mediump float;

      highp float random(vec2 co)
      {
          highp float a = 12.9898;
          highp float b = 78.233;
          highp float c = 43758.5453;
          highp float dt= dot(co.xy ,vec2(a,b));
          highp float sn= mod(dt,3.14);
          return fract(sin(sn) * c);
      }

      // Value Noise by Inigo Quilez - iq/2013
      // https://www.shadertoy.com/view/lsf3WH
      highp float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix( mix( random( i + vec2(0.0,0.0) ),
                          random( i + vec2(1.0,0.0) ), u.x),
                      mix( random( i + vec2(0.0,1.0) ),
                          random( i + vec2(1.0,1.0) ), u.x), u.y);
      }

      #ifndef OCTAVES
      #define OCTAVES 6
      #endif
      float mist(vec2 st) {
        //Initial values
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 0.0;

        // Loop of octaves
        for(int i = 0; i < OCTAVES; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      //  Function from Iñigo Quiles
      //  https://www.shadertoy.com/view/MsS3Wc
      vec3 hsb2rgb(vec3 c){
        vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
        rgb = rgb * rgb * (3.0 - 2.0 * rgb);
        return c.z * mix(vec3(1.0), rgb, c.y);
      }

      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution;
        st.x += 0.1 * u_time; 
        gl_FragColor = vec4(hsb2rgb(vec3(mist(st), 1.0, 1.0)),1.0);
      }
      `;
      //  远程资源
      const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
      const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

      //  定义异步函数并使用
      (async function () {
        //  场景
        const container = document.getElementById('stage');
        //  场景
        const scene = new spritejs.Scene({
          container,
          // displayRatio: 2,
          width: 600,
          height: 600,
          // mode: 'stickyHeight',
          // contextType: '2d',
        });
        //  图层
        const fglayer = scene.layer('fglayer', {autoRender: false});
        //  预加载资源
        await scene.preload([birdsRes, birdsJsonUrl]);
        //  加载shade
        const program = fglayer.renderer.createProgram({vertex, fragment});
        //  天空Block
        const sky = new spritejs.Block();
        sky.attr({
          size: [600, 600],
        });
        //  设置GLProgram
        sky.setProgram(program);
        //  获取宽高
        const {width, height} = fglayer.getResolution();
        // 将uniforms设置到对应的program
        sky.setUniforms({
          u_time: 0,
          u_resolution: [width, height],
        });
        //  program设置对应属性
        sky.setShaderAttribute('a_pp', () => {
          return [Math.random(), Math.random(), Math.random()];
        });
        //  添加到图层
        fglayer.append(sky);

        //  小鸟图
        const bird = new spritejs.Sprite('bird1.png');
        //  设置属性
        bird.attr({
          anchor: 0.5,
          pos: [300, 300],
          scale: 0.5,
        });
        //  添加到图层
        fglayer.append(bird);

        //  轮询修改小鸟背景图，形成动画
        let idx = 0;
        setInterval(() => {
          // bird.forceUpdate();
          bird.attributes.texture = `bird${++idx % 3 + 1}.png`;
        }, 100);
        //  外部时钟
        requestAnimationFrame(function update(t) {
          //  修改Uniforms
          sky.setUniforms({
            u_time: t / 1000,
          });
          //  图层重新渲染
          fglayer.render();
          //  调用自身
          requestAnimationFrame(update);
        });
      }());
    }
  }
}
</script>
<style scoped>
#stage{
  width:900px;
  height:900px;
  background-color:skyblue;
  margin:0 auto;
  border:2px solid skyblue;
}
</style>