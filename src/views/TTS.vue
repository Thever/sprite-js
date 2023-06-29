<template>
  <div class="about">
    <h1>speak-tts本地使用</h1>
    <button id="speak" @click="speak">点我播放语音</button>
  </div>
</template>
<script>
// @ is an alias to /src
// let speech;
import Speech from 'speak-tts' 
export default {
  name: 'TTS',
  components: {
  },
  data() {
    return {
      speech: null
    }
  },  
  mounted() {
    this.speechInit()
  },  
  methods: {
    speechInit(){
      this.speech = new Speech();
      this.speech.setLanguage('zh-CN');
      // this.speech.setLanguage('ja-JP');
      this.speech.init({
        // 'volume': 1,
        // 'lang': 'en-GB',
        // 'rate': 1,
        // 'pitch': 1,
        // 'voice':'Google UK English Male',
        // 'splitSentences': true,
        'listeners': {
            'onvoiceschanged': (voices) => {
                console.log("Event voiceschanged", voices)
            }
        }
      }).then((data)=>{
          console.log('语音播报初始化完成...')
          console.log({data})
          setTimeout(() => {
            console.log(`准备调用语音播放`)
            // 直接调用代码
            this.speak()
            // 模拟点击实现
            // document.getElementById('speak').click()
          }, 0)
        })
    },
   //语音播报
    speak(){
      console.log(`speak`)
      // this.speech.speak({text:"磊哥66666666"}).then(()=>{
      //   console.log("播报完成...")
      // })
      this.speech.speak({
        text: '2023年6月1日，综合数据机房15三联机UPS设备温度过高',
        // text: 'こんにちは',
        queue: false, // current speech will be interrupted,
        listeners: {
            onstart: () => {
                console.log('开始播放')
            },
            onend: () => {
                console.log('结束播放')
            },
            onresume: () => {
                console.log('继续说话')
            },
            onboundary: (event) => {
                console.log(`停顿`)
                console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.')
            }
        }
      }).then(() => {
          console.log("播放成功！")
      }).catch(e => {
          console.error("播放发生错误:", e)
      })
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