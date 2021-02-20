<template>
  <div class="son">
    <!-- <input v-model="mes" />
    <button @click="send">对父组件说</button>
    <slot /> -->
    <div>父组件对我说 :{{fatherMes}}</div>
    <!-- <div>父组件对我说（异步）{{fatherMesAsync}}</div> -->
    <input v-model="mes" type="text" />
    <button @click="send">对父组件说</button>
    <div>
      <input v-model="brotherMes" />
      <button @click="sendBrother">对兄弟组件说</button>
    </div>
  </div>
</template>

<script>
// import grandSon from "./GrandSon.vue";
import EventBus from '../utils/eventbus'
export default {
  name: "Son",
  components: {
    // grandSon,
  },
  data() {
    return {
      mes: "",
      brotherMes:'',
      fatherMes:''
    };
  },
  mounted(){
    EventBus.on('fatherSay',this.fatherSay)
  },
  // inject: ["father"],
  // inject:['sonSay'],
  methods: {
    send(){
      EventBus.emit('sonSay',this.mes)
    },
    sendBrother(){
      EventBus.emit('brotherSay',this.brotherMes)
    },
    fatherSay(value){
      this.fatherSay=value
    }
    // send() {
    //   this.sonSay(this.mes);
    // },
    // send(){
    //   this.$store.commit('saySon',this.mes)
    // }
  },
  computed:{
    // fatherMes(){
    //   return this.$store.state.fatherMes
    // },
    // fatherMesAsync(){
    //   return this.$store.state.fatherMesAsync
    // }
  }
};
</script>

<style>
</style>