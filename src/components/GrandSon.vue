<template>
  <div class="grand-son">
    <input v-model="mes" />
    <button @click="send">对爷爷组件说</button>
  </div>
</template>

<script>
export default {
  name: "GrandSon",
  inject: ["father"],
  data() {
    return {
      mes: "",
    };
  },
  methods: {
    send() {
      this.father.grandSon(this.mes);
    },
  },
};
</script>

<style>
</style>