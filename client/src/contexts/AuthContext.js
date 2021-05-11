import {createContext} from "react";

const func = () => {};

const AuthContext = createContext({
    id: null,
    token: null,
    login: func,
    logout: func,
    isAuthenticated: false
});

export default AuthContext;