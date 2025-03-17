import config from './custom/config.json';
import {createHumanFirstPartyHandler} from "@humansecurity/aws-lambda-edge-enforcer";


export const handler = createHumanFirstPartyHandler(config);