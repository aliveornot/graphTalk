import { useEffect, useState } from 'react';
import UnifiedAsyncStorage from '../utils/unifiedAsyncStorage';
import { atom } from 'jotai';

interface User {
    idUser: number;
}

const userAtom = atom<User>({});
const writeOnlyUserAtom = atom(
    null, // convention
    (get, set, newUserObj: User) => {
        set(userAtom, newUserObj);
    }
);

function useUserPersistentStore() {
    const [user, _setUser] = useState({});

    useEffect(() => {
        (async () => {
            const _user = await UnifiedAsyncStorage.getItemAsync('user');
            if (_user) {
                setUser(JSON.parse(_user));
            }
        })();
    }, []);

    function setUser(userObj: object) {
        _setUser(userObj);
        UnifiedAsyncStorage.setItemAsync('user', JSON.stringify(userObj));
    }

    return { user, setUser };
}

function useUserPersistentWriteOnlyStore() {
    const [user, _setUser] = useState({});

    useEffect(() => {
        (async () => {
            const _user = await UnifiedAsyncStorage.getItemAsync('user');
            if (_user) {
                setUser(JSON.parse(_user));
            }
        })();
    }, []);

    function setUser(userObj: object) {
        _setUser(userObj);
        UnifiedAsyncStorage.setItemAsync('user', JSON.stringify(userObj));
    }

    return { user, setUser };
}
export default useUserPersistentStore;
