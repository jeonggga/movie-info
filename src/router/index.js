import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/login", name: "Login", component: LoginView },
];

// 라우터 인스턴스를 생성하고 설정
const router = createRouter({
  // createWebHistory(): 브라우저의 '뒤로 가기', '앞으로 가기' 기록을
  // 실제 웹사이트처럼 자연스럽게 사용할 수 있게 해주는 설정
  history: createWebHistory(),
  routes, // 위에서 만든 지도를 라우터에 넣어줌
});

export default router;
