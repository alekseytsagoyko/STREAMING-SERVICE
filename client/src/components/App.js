import React from 'react';
import { useRoutes } from 'hookrouter';
import useAuth from '@hooks/auth/auth.hook';
import usePlayer from "@hooks/player/player.hook";
import AuthContext from "@contexts/AuthContext";
import PlayerContext from "@contexts/PlayerContext";
import Login from '@components/auth/Login';
import Register from '@components/auth/Register';
import Main from '@components/main/Main';
import styles from '@styles/app.css';
import '@styles/style.css';

const routes = {
    "/login": () => <Login/>,
    "/register": () => <Register/>,
    "/*": () => <Main/>
};

function App() {
    const authParams = useAuth();
    const playerParams = usePlayer();
    const routeResult = useRoutes(routes);

    return (
        <AuthContext.Provider value={{ ...authParams }}>
            <PlayerContext.Provider value={{ ...playerParams }}>
                <div className={styles.app}>
                    {routeResult}
                    {/*<MainModified />*/}
                </div>
            </PlayerContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;