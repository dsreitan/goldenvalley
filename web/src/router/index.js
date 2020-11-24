import { createRouter, createWebHistory } from "vue-router";
import Frontpage from "../views/Frontpage.vue";
import LearningPath from "../views/LearningPath.vue";
import LearningModule from "../views/LearningModule.vue";

const routes = [
  {
    path: "/",
    name: "Frontpage",
    component: Frontpage,
  },
  {
    path: "/:learningPathSlug",
    name: "LearningPath",
    component: LearningPath,
    props: (route) => ({
      learningPathSlug: route.params.learningPathSlug,
    }),
  },
  {
    path: "/:learningPathSlug/:topicSlug",
    name: "LearningPathTopic",
    component: LearningPath,
    props: (route) => ({
      learningPathSlug: route.params.learningPathSlug,
      topicSlug: route.params.topicSlug,
    }),
  },
  {
    path: "/:learningPathSlug/:topicSlug/:learningModuleSlug",
    name: "LearningModule",
    component: LearningModule,
    props: (route) => ({
      learningPathSlug: route.params.learningPathSlug,
      topicSlug: route.params.topicSlug,
      learningModuleSlug: route.params.learningModuleSlug,
    }),
  },
  {
    path: "/:learningPathSlug/:topicSlug/:learningModuleSlug/:activitySlug",
    name: "LearningModuleActivity",
    component: LearningModule,
    props: (route) => ({
      learningPathSlug: route.params.learningPathSlug,
      topicSlug: route.params.topicSlug,
      learningModuleSlug: route.params.learningModuleSlug,
      activitySlug: route.params.activitySlug,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
