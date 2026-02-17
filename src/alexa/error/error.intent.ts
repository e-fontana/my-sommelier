import { Logger } from '@nestjs/common';
import { ErrorHandler } from 'ask-sdk-core';

const logger = new Logger('ErrorIntentHandler');

export const ErrorIntentHandler: ErrorHandler = {
  canHandle(handlerInput, error) {
    logger.error(`Error handled: ${error.message}`, error.stack);
    return true; // Handle all errors
  },

  handle(handlerInput) {
    logger.log('ErrorIntentHandler foi acionado!');

    return handlerInput.responseBuilder
      .speak('Ocorreu um erro.')
      .reprompt('Você pode dizer olá novamente.')
      .getResponse();
  },
};
