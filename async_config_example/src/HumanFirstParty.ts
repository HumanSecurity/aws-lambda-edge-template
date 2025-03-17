import { getConfigAsync } from './custom/config';
import {createHumanFirstPartyHandler} from "@humansecurity/aws-lambda-edge-enforcer";

const config = await getConfigAsync();
export const handler = createHumanFirstPartyHandler(config);
