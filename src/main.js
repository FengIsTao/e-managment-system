import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";

createApp(App)
  .mount(store)
  .mount("#app");
