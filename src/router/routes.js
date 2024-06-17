import TasksPage from "../pages/TasksPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"
import SummaryPage from "../pages/SummaryPage.vue"
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue"
import HomePage from "../pages/HomePage.vue"

const base = "/toddolist"

const routes = [
  {
    path: `${base}/`,
    name: "home",
    component: HomePage
  },
  {
    path: `${base}/tasks`,
    name: "tasks",
    component: TasksPage,
    meta: {
      auth: true
    }
  },
  {
    path: `${base}/summary`,
    component: SummaryPage,
    name: "summary",
    meta: {
      auth: true,
    },
  },
  {
    path: `${base}/login`,
    name: "login",
    component: LoginPage,
    meta: {
      guest: true
    }
  },
  {
    path: `${base}/register`,
    name: "register",
    component: RegisterPage,
    meta: {
      guest: true
    }
  },
  {
    path: "/:notFound(.*)",
    name: "error.404",
    component: NotFoundErrorPage
  }
];


// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomePage
//   },
//   {
//     path: "/tasks",
//     name: "tasks",
//     component: TasksPage,
//     meta: {
//       auth: true
//     }
//   },
//   {
//     path: "/summary",
//     component: SummaryPage,
//     name: "summary",
//     meta: {
//       auth: true,
//     },
//   },
//   {
//     path: "/login",
//     name: "login",
//     component: LoginPage,
//     meta: {
//       guest: true
//     }
//   },
//   {
//     path: "/register",
//     name: "register",
//     component: RegisterPage,
//     meta: {
//       guest: true
//     }
//   },
//   {
//     path: "/:notFound(.*)",
//     name: "error.404",
//     component: NotFoundErrorPage
//   }
// ];

export default routes;