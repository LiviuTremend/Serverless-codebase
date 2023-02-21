
import { handler } from '@src/handlers/handler';
import { sqsEventToTypes } from '@src/util/aws/SQS';
import { Dummy } from '@src/interfaces/dummy.interface';
import { SQSEvent, SQSRecord } from 'aws-lambda';
import { showMessage } from '@src/util/handlers/showMessage';

export const buildSQSEvent = (...body: string[]): SQSEvent => {
  return {
    Records: body.map((b) => buildSQSRecord(b))
  }
};


export const buildSQSRecord = (body: string): SQSRecord => ({
  body,
  messageId: '1234',
  receiptHandle: '1234',
  md5OfBody: '1DSAFDS',
  attributes: {
    ApproximateReceiveCount: '1234',
    SentTimestamp: '1234',
    SenderId: '1234',
    ApproximateFirstReceiveTimestamp: '1234',
  },
  messageAttributes: {
    attr: {
      dataType: '1234',
    },
  },
  eventSource: '1234',
  eventSourceARN: '1234',
  awsRegion: 'eu-west-1',
});

const data: SQSEvent = buildSQSEvent(
  JSON.stringify({
    param1: 'PUBLISH',
    param2: '123123123',
  })
)

jest.mock('@src/util/handlers/showMessage');

describe('when receiving an sqs event', () => {
  it('should handle sqs event', () => {
    const result = handler(data);
    const dummyObject: Dummy = {
      param1: 'PUBLISH',
      param2: '123123123',
    }

    expect(showMessage).not.toThrow();
    expect(showMessage).toHaveBeenCalledWith(dummyObject)
  })

})
