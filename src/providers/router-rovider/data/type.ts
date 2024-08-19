export interface GetMeResponse {
  _id: string;
  firstName: string;
  email: string;
}

export type GetMeVariables = { token: string };
