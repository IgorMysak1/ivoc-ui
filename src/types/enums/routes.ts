export enum RoutesParams {
  TAB = ":tab",
}

export enum Routes {
  NOT_FOUND = "*",
  AUTH = "/auth",
  LOG_IN = "/auth/log-in",
  SIGN_UP = "/auth/sign-up",
  PROFILE = "/profile",
  INITIAL = "/",
  HOME = `/${RoutesParams.TAB}`,
}
