import { SQSEvent, SQSRecord } from 'aws-lambda';

export function sqsEventToTypes<T>(input: SQSEvent): T[] {
  return input.Records.map((rec) => {
    const msg = JSON.parse(rec.body) as T;
    return msg;
  });
}

