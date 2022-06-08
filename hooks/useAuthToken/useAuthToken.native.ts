import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';

const TOKEN_NAME = 'authToken';
function useAuthToken() {
    const [authToken, _setAuthToken] = useState<string>('');
    useEffect(() => {
        (async () => {
            const tokenValue = (await SecureStore.getItemAsync(TOKEN_NAME)) || '';
            _setAuthToken(tokenValue);
        })();
    }, []);

    function setAuthToken(tokenValue: string) {
        _setAuthToken(tokenValue);
        SecureStore.setItemAsync(TOKEN_NAME, tokenValue);
    }

    function removeAuthToken() {
        _setAuthToken('');
        SecureStore.deleteItemAsync(TOKEN_NAME);
    }

    return [authToken, setAuthToken, removeAuthToken];
}

export default useAuthToken;
