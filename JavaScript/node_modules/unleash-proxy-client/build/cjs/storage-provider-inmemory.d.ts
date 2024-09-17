import type IStorageProvider from './storage-provider';
export default class InMemoryStorageProvider implements IStorageProvider {
    private store;
    save(name: string, data: any): Promise<void>;
    get(name: string): Promise<any>;
}
//# sourceMappingURL=storage-provider-inmemory.d.ts.map