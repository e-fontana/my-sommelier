import { HelloWorldIntentHandler } from './hello-world.intent';
import { LaunchRequestHandler } from './launch-request';

export const allHandlers = [LaunchRequestHandler, HelloWorldIntentHandler];
