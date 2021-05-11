import React from 'react';
import { useRoutes } from 'hookrouter';
import useAuth from '@hooks/auth/auth.hook';
import AuthContext from "@contexts/AuthContext";
import Login from '@components/auth/Login';
import Register from '@components/auth/Register';
import Main from '@components/main/Main';
import styles from '@styles/app.css';
import '@styles/style.css';

const routes = {
    "/login": () => <Login/>,
    "/registration": () => <Register/>,
    "/": () => <Main/>
};

function App() {
    const authParams = useAuth();
    const routeResult = useRoutes(routes);

    return (
        <AuthContext.Provider value={{ ...authParams }}>
            <div className={styles.app}>
                {routeResult}
            </div>
        </AuthContext.Provider>
    );
}

export default App;