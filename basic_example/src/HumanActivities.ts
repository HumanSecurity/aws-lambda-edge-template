import { createHumanActivitiesHandler } from './px/humansecurity';
import config from './custom/config.json';


export const handler = createHumanActivitiesHandler(config);