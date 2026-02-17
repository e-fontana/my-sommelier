import { SkillBuilders } from 'ask-sdk-core';
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import { ErrorIntentHandler } from '../error/error.intent';
import { allHandlers } from '../intents';

const skill = SkillBuilders.custom()
  .addRequestHandlers(...allHandlers)
  .addErrorHandlers(ErrorIntentHandler)
  .create();

export const skillAdapter = new ExpressAdapter(skill, true, true);
