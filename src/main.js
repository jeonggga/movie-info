import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App); // 1. 앱을 변수에 담는다.

app.use(router); // 2. 라우터 지도를 장착한다.
app.mount("#app"); // 3. 화면에 띄운다.
