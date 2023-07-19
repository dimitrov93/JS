import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./pages/UsersList.vue";
import UsersFooter from "./pages/UsersFooter.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import TeamsFooter from "./pages/TeamsFooter.vue";
import NotFound from "./pages/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        next();
      },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next()
  } else {
    next()
  }
  // if (to.name === "team-members") {
  //   next();
  // } else {
  //   next({ name: "team-members", params: { teamId: "t2" } });
  // }
  next();
});

router.afterEach(function (to, from) {
  console.log(to, from);
});

export default router