<template>
  <div class="son">兄弟组件对我说:{{ brotherMes }}</div>
</template>

<script>
import EventBus from "../utils/eventbus";
export default {
  name: "BrotherSon",
  data() {
    return {
      brotherMes: "",
    };
  },
  mounted() {
    EventBus.on("brotherSay", this.brotherSay);
  },
  methods: {
    brotherSay(value) {
      this.brotherMes = value;
    },
  },
};
</script>

<style>
</style>