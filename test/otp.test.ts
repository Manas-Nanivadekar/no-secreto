import {
  setEmailDetails,
  sendOTPEmail,
  // verifyEmail,
} from '../src/index';

describe('send otp', () => {
  it('should send otp', async () => {
    setEmailDetails('sender@email.com', 'senderPassword');
    const result = await sendOTPEmail('receiver@email.com');
    console.log(result);
    expect(result).toBeTruthy();
  });
});
