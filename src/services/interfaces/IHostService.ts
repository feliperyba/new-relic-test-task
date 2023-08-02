export interface IHostService<T, B> {
    addAppToHosts: (app: T, hosts: Array<B>) => void;
    removeAppFromHosts: (app: T, hosts: Array<B>) => void;
    getTopAppsByHost: (name: string) => Array<T>;
}