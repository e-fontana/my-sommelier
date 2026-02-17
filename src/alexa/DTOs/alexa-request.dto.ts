export interface AlexaRequestEnvelope {
  version: string;
  request: AlexaRequest;
}

export interface AlexaRequest {
  type:
    | 'LaunchRequest'
    | 'IntentRequest'
    | 'SessionEndedRequest'
    | 'Alexa.Presentation.APL.UserEvent';
  requestId: string;
  timestamp: string;
  locale: string;
  intent?: AlexaIntent;
}

export interface AlexaIntent {
  name: string;
  confirmationStatus: string;
  slots?: Record<string, AlexaSlot>;
}

export interface AlexaSlot {
  name: string;
  value?: string;
  confirmationStatus: string;
}
