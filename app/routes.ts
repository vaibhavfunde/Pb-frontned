import { type RouteConfig, index,  route, layout } from "@react-router/dev/routes";

export default [
    layout("routes/auth/auth-layout.tsx", [
        index("routes/root/home.tsx"),
        route("sign-in", "routes/auth/sign-in.tsx"),
        route("sign-up", "routes/auth/sign-up.tsx"),
        route("forgot-password", "routes/auth/forgot-password.tsx"),
        route("reset-password", "routes/auth/reset-password.tsx"),
        route("verify-email", "routes/auth/verify-email.tsx"),
        route("two-factor-auth", "routes/auth/twoface.tsx"),
      ]),
      layout("routes/dashboard/dashboard-layout.tsx", [
         route("dashboard", "routes/dashboard/index.tsx"),
         route("workspaces", "routes/dashboard/workspaces/index.tsx"),
         route(
           "workspaces/:workspaceId",
           "routes/dashboard/workspaces/workspace-details.tsx"
         ),

         route(
          "workspaces/:workspaceId/projects/:projectId",
          "routes/dashboard/project/project-details.tsx"
        ),
        route(
          "workspaces/:workspaceId/projects/:projectId/tasks/:taskId",
          "routes/dashboard/task/task-details.tsx"
        ),
        route("my-tasks", "routes/dashboard/my-tasks.tsx"),
         route("members", "routes/dashboard/members.tsx"),
         route("settings", "routes/dashboard/setting/UserSettings.tsx"),

    

      ]),

      route(
        "workspace-invite/:workspaceId",
        "routes/dashboard/workspaces/workspace-invite.tsx"
      ),
      layout("routes/user/user-layout.tsx", [
        route("user/profile", "routes/user/profile.tsx"),
      ]),
    
] satisfies RouteConfig;

// export default [
//     index("routes/root/home.tsx")] satisfies RouteConfig;
