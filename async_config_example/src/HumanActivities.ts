import { getConfigAsync } from './custom/config';
import {createHumanActivitiesHandler} from "@humansecurity/aws-lambda-edge-enforcer";

const config = await getConfigAsync();
export const handler = createHumanActivitiesHandler(config);
