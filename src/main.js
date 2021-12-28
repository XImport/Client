import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "boxicons/css/boxicons.min.css";

import "boxicons";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
