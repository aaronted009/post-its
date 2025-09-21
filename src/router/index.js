import App from "../views/App.vue";
import EditPostIt from "@/views/EditPostIt.vue";
import ShowAllPostIts from "@/views/ShowAllPostIts.vue";
import CreatePostIt from "@/views/CreatePostIt.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
    },
    {
      path: "/create",
      name: "create-note",
      component: CreatePostIt,
    },
    {
      path: "/notes",
      name: "showAll",
      component: ShowAllPostIts,
    },
    {
      path: "/notes/:id",
      name: "note",
      component: EditPostIt,
    },
  ],
});

export default router;
