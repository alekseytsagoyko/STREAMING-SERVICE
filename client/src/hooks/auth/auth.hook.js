import { useCallback, useEffect, useState } from "react";
import { navigate } from 'hookrouter';
import config from '~/config';

function useAuth() {

    const [id, setId] = useState(null);
    const [token, setToken] = useState(null);

    const login = useCallback((id, token) => {
        setId(id);
        setToken(token);

        localStorage.setItem(config.storageName, JSON.stringify({ id, token }));
        navigate(config.loginPath);
    }, []);

    const logout = useCallback(() => {
        setId(null);
        setToken(null);

        localStorage.removeItem(config.storageName);
        navigate(config.logoutPath);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(config.storageName));

        if(data && data.token) {
            login(data.id, data.token);
        }
    }, [login]);

    return { id, token, login, logout };
}

export default useAuth;