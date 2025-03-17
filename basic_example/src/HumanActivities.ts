import config from './custom/config.json';
import {createHumanActivitiesHandler} from "@humansecurity/aws-lambda-edge-enforcer";


export const handler = createHumanActivitiesHandler(config);