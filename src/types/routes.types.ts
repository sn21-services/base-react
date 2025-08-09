import type { ComponentType } from "react";
import type { RouteObject } from "react-router";

export type RouteItemDef = RouteObject & {
  layout?: ComponentType;
};
