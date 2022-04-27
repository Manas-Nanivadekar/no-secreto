import { ClassicLevel } from 'classic-level';

const levelDB = new ClassicLevel('../../db', {
  valueEncoding: 'json',
});

const randomWords = require('random-words'); // TODO: Replace with a secure random number generator

export class OTPGenerator {
  async generateOtp(user: string) {
    const otp = randomWords({ exactly: 3, join: '-' });
    await levelDB.put(user, otp);
    return otp;
  }

  async verifyOtp(user: string, otp: string): Promise<boolean | string> {
    const storedOtp = await levelDB.get(user, { valueEncoding: 'utf8' });
    if (storedOtp == otp) {
      await levelDB.del(user);
      return true;
    } else {
      return false;
    }
  }
}
