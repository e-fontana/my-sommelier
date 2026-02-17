import { Logger } from '@nestjs/common';
import { RequestHandler } from 'ask-sdk-core';

const logger = new Logger('LaunchRequestHandler');

export const LaunchRequestHandler: RequestHandler = {
  canHandle(handlerInput) {
    logger.log(
      'Verificando se LaunchRequestHandler pode lidar com a requisição...',
    );
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    logger.log('LaunchRequest foi acionado!');

    return handlerInput.responseBuilder
      .speak('Bem-vindo ao meu sommelier.')
      .reprompt('Como posso ajudar?')
      .getResponse();
  },
};
