import { getConfigAsync } from './custom/config';
import {createHumanEnforceHandler} from "@humansecurity/aws-lambda-edge-enforcer";

const config = await getConfigAsync();
export const handler = createHumanEnforceHandler(config);