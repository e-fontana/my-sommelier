import { CancelAndStopIntentHandler } from './cancel-stop.intent';
import { FallbackIntentHandler } from './fallback-intent.intent';
import { HelpIntentHandler } from './help-intent.intent';
import { SessionEndedRequestHandler } from './session-ended.intent';

export const handlers = [
  CancelAndStopIntentHandler,
  FallbackIntentHandler,
  HelpIntentHandler,
  SessionEndedRequestHandler,
];
