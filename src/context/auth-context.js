import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    userId: null,
    name: null,
    login: () => {},
    logout: () => {}
})