import { RequestHandler } from 'ask-sdk-core';

export const NavigateHomeIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name ===
        'AMAZON.NavigateHomeIntent'
    );
  },

  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Ok, voltando para o início. Como posso ajudar?')
      .reprompt('Como posso ajudar?')
      .getResponse();
  },
};
