import Vue from "vue";
import App from "./App.vue";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.snow.css";
import "mdui/dist/css/mdui.css";
import "mdui/dist/js/mdui.js";
import { utools } from "./utils/utools.js";
import Api from './utils/index'
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "production") {
  window.utools = window.utools || utools;
}

Vue.config.productionTip = false;
Vue.use(VueQuillEditor, {
  placeholder: "记个笔记",
});
Vue.prototype.utools = window.utools;
Vue.prototype.$api = Api
new Vue({
  render: (h) => h(App),
}).$mount("#app");
