import IAccount from "./iaccount";
import AccountType from "./account";
import AccountRepresentation from "./representation";

export default class FullAccount implements IAccount {
    private accountType: AccountType;

    constructor(name: string, path: string) {
        this.accountType = new AccountType(name, path, 'full');
    }

    equalsType(type: string): boolean {
        return this.accountType.equalsType(type);
    }

    static pathMatchesType(path: string): boolean {
        return AccountType.pathMatchesType(path, 'full');
    }

    toJSONFile(outputPath: string): void {
        this.accountType.toJSONFile(outputPath);
    }

    toJSON(): AccountRepresentation {
        return this.accountType.toJSON();
    }
}