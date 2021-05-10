import { useCallback, useState } from "react";
import config from '~/config';

function useHttp() {

    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(config.proxy + url, { method, body, headers });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Request error');
            }

            return data;
        } catch (e) {
            setError(e);
            throw e;
        }
    }, []);

    return { request, error };
}

export default useHttp;