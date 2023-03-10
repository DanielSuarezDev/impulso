export interface Route {
  path: string;
  isPrivate?: boolean;
  element: JSX.Element;
  isLayout?: boolean;
}

export enum ROUTES {
  LOGIN = 'login',
  HOME = '/',
}
