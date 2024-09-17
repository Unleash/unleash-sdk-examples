import type IStorageProvider from './storage-provider';
export default class LocalStorageProvider implements IStorageProvider {
    private prefix;
    constructor(name?: string);
    save(name: string, data: any): Promise<void>;
    get(name: string): any;
}
//# sourceMappingURL=storage-provider-local.d.ts.map