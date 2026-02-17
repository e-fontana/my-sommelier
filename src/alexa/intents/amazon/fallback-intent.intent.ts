import { RequestHandler } from 'ask-sdk-core';

export const FallbackIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name ===
        'AMAZON.FallbackIntent'
    );
  },

  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Desculpe, não entendi. Pode repetir?')
      .reprompt('Pode repetir?')
      .getResponse();
  },
};
