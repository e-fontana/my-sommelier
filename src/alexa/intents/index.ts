import { ErrorIntentHandler } from '../error/error.intent';
import { HelloWorldIntentHandler } from './hello-world.intent';
import { LaunchRequestHandler } from './launch-request';

export const allHandlers = [
  LaunchRequestHandler,
  HelloWorldIntentHandler,
  ErrorIntentHandler,
];
