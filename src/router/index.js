// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
      },
      {
        path: "/patients",
        name: "Patients",
        component: () => import("@/views/patients/PatientsList.vue"),
      },
      {
        path: "/patients/new-patient",
        name: "NewPatient",
        component: () => import("@/views/patients/NewPatient.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("@/layouts/auth/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/auth/LoginPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
