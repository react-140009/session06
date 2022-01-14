/*
  Auth:
    server -> session -> cookie

    Token
      jwt.io

*/
export interface LoginModel {
  email: string;
  password: string;
}
