import { RequestHandler } from 'ask-sdk-core';

export const HelpIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
    );
  },

  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Você pode dizer, por exemplo, recomendar um vinho.')
      .reprompt('Como posso ajudar?')
      .getResponse();
  },
};
