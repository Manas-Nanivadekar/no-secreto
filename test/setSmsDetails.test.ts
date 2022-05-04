import { setSMSDetails } from '../src/index';
import { SmsDetails } from '../src/utils/smsDetails';

describe('set sms details', () => {
  it('should set sms details', () => {
    const result = setSMSDetails('XXXXXXXXXXX', 'YYYYYYYYYYY', 'ZZZZZZZZZZZ');
    expect(result).toBeTruthy();
  });
});

describe('get sms details', () => {
  it('should get sms details', () => {
    setSMSDetails('XXXXXXXXXXX', 'YYYYYYYYYYY', 'ZZZZZZZZZZZ');
    const details = new SmsDetails().getSmsDetails();
    console.log(details);
    expect(details).toBeTruthy();
  });
});
