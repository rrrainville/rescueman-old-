export class CheckboxPermission {
    value: string;
    label: string;
    create: boolean;
    read: boolean;
    write: boolean;
    remove: boolean;

    constructor(value: any, label: any, create?: boolean, read?: boolean, write?: boolean, remove?: boolean) {
        this.value = value;
        this.label = label;
        this.create = create ? create : false;
        this.read = read ? read : false;
        this.write = write ? write : false;
        this.remove = remove ? remove : false;
    }
}
