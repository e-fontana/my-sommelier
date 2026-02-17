import { CancelAndStopIntentHandler } from './cancel-stop.intent';
import { HelpIntentHandler } from './help-intent.intent';
import { NavigateHomeIntentHandler } from './navigate-home.intent';
import { SessionEndedRequestHandler } from './session-ended.intent';

export const handlers = [
  CancelAndStopIntentHandler,
  NavigateHomeIntentHandler,
  HelpIntentHandler,
  SessionEndedRequestHandler,
];
