import { Logger } from '@nestjs/common';
import { RequestHandler } from 'ask-sdk-core';

const logger = new Logger('HelloWorldIntentHandler');

export const HelloWorldIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    console.log(
      'Verificando se HelloWorldIntentHandler pode lidar com a requisição...',
    );
    console.log(handlerInput);
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent'
    );
  },

  handle(handlerInput) {
    logger.log('HelloWorldIntent foi acionado!');

    return handlerInput.responseBuilder
      .speak('Hello world!')
      .reprompt('Você pode dizer olá novamente.')
      .getResponse();
  },
};
