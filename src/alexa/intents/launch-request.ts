import { RequestHandler } from 'ask-sdk-core';

export const LaunchRequestHandler: RequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Bem-vindo ao meu sommelier.')
      .reprompt('Como posso ajudar?')
      .getResponse();
  },
};
