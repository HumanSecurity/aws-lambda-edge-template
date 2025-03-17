import config from './custom/config.json';
import { createHumanEnforceHandler } from "@humansecurity/aws-lambda-edge-enforcer";

export const handler = createHumanEnforceHandler(config);
