import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import PlaceView from "../views/PlaceView.vue";
import AddPlaceView from "../components/post/AddPlaceView.vue";
import UpdatePlaceView from "../components/post/UpdatePlaceView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
    {
      path: "/post",
      name: "post",
      component: PlaceView,
    },
    {
      path: "/update/:index",
      name: "UpdatePlaceView",
      component: UpdatePlaceView,
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: AddPlaceView,
    },
  ],
});
export default router;
