import { SQSEvent } from 'aws-lambda';
import { sqsEventToTypes } from '../util/aws/SQS';
import { logger } from '@src/util/logging';
import { Dummy } from '@src/interfaces/dummy.interface';
import { showMessage } from '@src/util/handlers/showMessage';


export const handler = async (event: SQSEvent): Promise<void> => {

  const message = sqsEventToTypes<Dummy>(event)[0];

  try {
    await showMessage(message);
  } catch(e) {
    logger.error(e);
  }
};
