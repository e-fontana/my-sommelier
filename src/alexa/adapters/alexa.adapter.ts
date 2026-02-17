import { SkillBuilders } from 'ask-sdk-core';
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import { allHandlers } from '../intents';

const skill = SkillBuilders.custom()
  .addRequestHandlers(...allHandlers)
  .create();

export const skillAdapter = new ExpressAdapter(skill, true, true);
