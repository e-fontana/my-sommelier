import { RequestHandler } from 'ask-sdk-core';

export const CancelAndStopIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    return (
      request.type === 'IntentRequest' &&
      (request.intent.name === 'AMAZON.StopIntent' ||
        request.intent.name === 'AMAZON.CancelIntent')
    );
  },

  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Até logo!')
      .withShouldEndSession(true)
      .getResponse();
  },
};
