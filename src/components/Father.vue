<template>
  <div class="father">
    <input v-model="mes" />
    <button @click="send">同步：对子组件说</button><br />
    <!-- <input v-model="asyncMes" />
    <button @click="asyncSend">异步：对子组件说</button><br /> -->
    <div>子组件对我说:{{ sonMes }}</div>
    <son />
    <brotherSon />
  </div>
</template>

<script>
import son from "./Son";
import brotherSon from "./BrotherSon";
import EventBus from "../utils/eventbus.js";
// import grandSon from "./GrandSon";
export default {
  name: "Father",
  data() {
    return {
      // grandSonMes: "",
      // sonMes: "",
      mes: "",
      // asyncMes: "",
      sonMes: "",
    };
  },
  components: {
    son,
    brotherSon,
    // grandSon,
  },
  // provide() {
  //   return {
  //     // father: this,
  //     grandSonSay: this.grandSonSay.bind(this),
  //     sonSay: this.sonSay.bind(this),
  //   };
  // },
  methods: {
    // sonSay(value) {
    //   this.sonMes = value;
    // },
    // grandSonSay(value) {
    //   this.grandSonMes = value;
    // },
    send() {
      // this.$store.commit('sayFather',this.mes)
      EventBus.emit("fatherSay", this.mes);
    },
    sonSay(value) {
      this.sonMes = value;
    },
    // asyncSend(){
    //   this.$store.dispatch('asyncSayFather',this.asyncMes)
    // }
  },
  computed: {
    // sonMes() {
    //   return this.$store.state.sonMes;
    // },
  },
  mounted() {
    // console.log(this.$store);
    EventBus.on("sonSay", this.sonSay);
  },
};
</script>

<style>
</style>