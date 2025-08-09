import { lazy } from "react";

import type { RouteItemDef } from "@/types/routes.types";
import { HomePathsEnum } from "@/features/home/constants/home.paths";

const HOME_SCREEN: RouteItemDef = {
  id: "HOME",
  path: HomePathsEnum.HOME,
  Component: lazy(() => import("@/features/home/screens/HomeScreen")),
};

const TODO_SCREEN: RouteItemDef = {
  id: "TODO",
  path: "/todo",
  Component: lazy(() => import("@/features/home/screens/TodoScreen")),
};

export const HOME_ROUTES = [HOME_SCREEN, TODO_SCREEN];
