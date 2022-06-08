import { _setItemAsync, _getItemAsync, _deleteItemAsync } from './storage';

async function getItemAsync(key: string): Promise<string | null> {
    const value = await _getItemAsync(key);
    return value;
}
async function setItemAsync(key: string, value: string): Promise<void> {
    await _setItemAsync(key, value);
    return;
}
async function deleteItemAsync(key: string): Promise<void> {
    await _deleteItemAsync(key);
    return;
}

const UnifiedAsyncStorage = {
    getItemAsync,
    setItemAsync,
    deleteItemAsync,
};

export default UnifiedAsyncStorage;
