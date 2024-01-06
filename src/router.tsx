import { RootRoute, Route, Router } from "@tanstack/react-router";

import App from "./App.tsx";
import MainPage from "./pages/MainPage.tsx";

const rootRoute = new RootRoute({ component: () => <App /> });
const mainRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <MainPage />,
});

const routeTree = rootRoute.addChildren([mainRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
