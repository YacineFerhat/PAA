import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  grade: null,
  login: () => {},
  logout: () => {},
});
