import * as amazon from './amazon';
import { HelloWorldIntentHandler } from './hello-world.intent';
import { LaunchRequestHandler } from './launch-request';

export const allHandlers = [
  LaunchRequestHandler,
  HelloWorldIntentHandler,
  ...amazon.handlers,
];
