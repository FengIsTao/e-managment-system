<template>
  <div class="father">
    <input type="text" v-model="mes" />
    <button @click="send">对子组件说</button>
    <div>子组件对我说:{{ sonMes }}</div>
    <son />
  </div>
</template>

<script>
import son from "../components/VueDemo2";
import VueBus from "../utils/eventbus";
export default {
  name: "VueDemo1",
  components: {
    son,
  },
  data() {
    return {
      mes: "",
      sonMes: "",
    };
  },
  created() {
    VueBus._data.mes = "Hello,World";
  },
  mounted() {
    VueBus.$on("sonSay", this.sonSay);
  },
  methods: {
    send() {
      VueBus.$emit("fatherSay", this.mes);
    },
    sonSay(value) {
      this.sonMes = value;
    },
  },
};
</script>

<style>
</style>