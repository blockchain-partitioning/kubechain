import * as fs from 'fs-extra';
import Options from "../../options";
import ICommandExecutor from "../../../utilities/icommandexecutor";
import Kubechain from "../../../../kubechain/kubechain";

export default class ChainConfigurationDeleter implements ICommandExecutor {
    validCommandForChain(chain: string): boolean {
        return chain === 'burrow';
    }

    delete(kubechain: Kubechain) {
        const options = new Options(kubechain);
        fs.removeSync(options.get('$.blockchain.intermediate.paths.root'));
    }
}