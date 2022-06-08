async function _setItemAsync(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value);
    return;
}

async function _getItemAsync(key: string): Promise<string | null> {
    const value = localStorage.getItem(key);
    return value;
}

async function _deleteItemAsync(key: string): Promise<void> {
    localStorage.removeItem(key);
    return;
}

export { _setItemAsync, _getItemAsync, _deleteItemAsync };
