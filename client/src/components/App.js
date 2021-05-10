import React from 'react';
import { useRoutes, navigate } from 'hookrouter';
import Login from '@components/auth/Login';
import Registration from '@components/auth/Registration';
import Main from '@components/main/Main';
import '@styles/style.css';

const routes = {
    "/login": () => <Login/>,
    "/registration": () => <Registration/>,
    "/": () => <Main/>
}

function App() {
    const routeResult = useRoutes(routes);
    return routeResult;
}

export default App;