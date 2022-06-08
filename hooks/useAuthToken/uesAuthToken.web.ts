import { useState } from 'react';
import { useCookies } from 'react-cookie';

const TOKEN_NAME = 'authToken';

function useAuthToken() {
    const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);
    const [authToken, _setAuthToken] = useState<string>(cookies[TOKEN_NAME] || '');

    function setAuthToken(tokenValue: string) {
        _setAuthToken(tokenValue);
        const now = new Date();
        setCookie(TOKEN_NAME, tokenValue, { expires: new Date(now.setDate(now.getDate() + 9999)), path: '/' });
    }

    function removeAuthToken() {
        _setAuthToken('');
        removeCookie(TOKEN_NAME);
    }

    return [authToken, setAuthToken, removeAuthToken];
}

export default useAuthToken;
