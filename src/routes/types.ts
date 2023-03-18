export interface Route {
  path: string;
  isPrivate?: boolean;
  element: JSX.Element;
  isLayout?: boolean;
}

export enum ROUTES {
  LOGIN = "login",
  HOME = "/",
  RESOURCES = "/recursos",
  BLOG = "/blog",
  ABOUT = "/nosotros",
  BESAVE = "/ser-salvo",
  BLOG_DETAIL = "/blog/:id",
  RESOURCE_DETAIL= "/recursos/:id",
}
