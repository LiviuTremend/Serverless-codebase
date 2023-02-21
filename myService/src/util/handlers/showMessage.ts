
import { logger } from '@src/util/logging';
import { Dummy } from '@src/interfaces/dummy.interface';

// Mapping function
export async function showMessage(dummy: Dummy): Promise<void> {
  logger.info(`Message mapped: ${dummy.param1}`)
}