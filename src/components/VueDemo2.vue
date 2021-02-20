<template>
  <div class="son">
    <div>父组件对我说:{{fatherMes}}</div>
    <input v-model="mes"/>
    <button @click="send">对父组件说</button>
    <button @click="getFatherMes">获取数据</button>
  </div>
</template>

<script>
import VueBus from '../utils/eventbus'
export default {
  name:'VueBusDemo2',
  data(){
    return {
      mes:'',
      brotherMes:'',
      fatherMes:''
    }
  },
  mounted(){
    VueBus.$on('fatherSay',this.fatherSay)
  },
  methods:{
    send(){
      VueBus.$emit('sonSay',this.mes)
    },
    fatherSay(value){
    this.fatherMes=value
    },
    getFatherMes(){
      console.log(VueBus._data.mes);
    }
  }
}
</script>

<style>

</style>