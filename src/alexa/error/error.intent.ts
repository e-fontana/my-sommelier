import { Logger } from '@nestjs/common';
import { RequestHandler } from 'ask-sdk-core';

const logger = new Logger('ErrorIntentHandler');

export const ErrorIntentHandler: RequestHandler = {
  canHandle(_) {
    return true;
  },

  handle(handlerInput) {
    logger.log('ErrorIntentHandler foi acionado!');

    return handlerInput.responseBuilder
      .speak('Ocorreu um erro.')
      .reprompt('Você pode dizer olá novamente.')
      .getResponse();
  },
};
