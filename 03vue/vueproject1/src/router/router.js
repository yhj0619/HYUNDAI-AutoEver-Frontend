import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import AboutView from "../components/AboutView.vue";
import PortfolioView from "../components/PortfolioView.vue";
import DetailView from "../components/DetailView.vue";

//싱글 페이지 어쩌고..ㅋ
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      //component를 작성해주면, 연결해준다고 생각하셈.
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/portfolio/:num",
      name: "portfolio detail",
      component: DetailView,
      //:name dl라고 param을 작성하
    },
  ],
});

export default router;
