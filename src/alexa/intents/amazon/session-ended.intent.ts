import { RequestHandler } from 'ask-sdk-core';

export const SessionEndedRequestHandler: RequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },

  handle(handlerInput) {
    console.log('Sessão encerrada');
    return handlerInput.responseBuilder.getResponse();
  },
};
