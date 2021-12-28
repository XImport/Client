import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import 'animate.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'materialize-css/dist/css/materialize.min.css'
// import 'material-design-icons/iconfont/material-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)


app.use(store)
app.use(router)
app.mount("#app");
app.use(AOS.init({one:true}));

