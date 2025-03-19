import {createHumanEnforceHandler} from "./px/humansecurity";
import config  from "./custom/config.json"

export const handler = createHumanEnforceHandler(config);
