import {createHumanFirstPartyHandler} from "./px/humansecurity";
import config from "./custom/config.json";


export const handler = createHumanFirstPartyHandler(config);