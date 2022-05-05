import { OTPGenerator } from '../src/utils/otpGenerator';

describe('generate alphabetical otp', () => {
  it('Should generate otp', () => {
    const otp = new OTPGenerator().generateOtp('Hello');
    expect(otp).toBeTruthy();
  });
});
