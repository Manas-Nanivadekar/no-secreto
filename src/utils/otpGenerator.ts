import { ClassicLevel } from 'classic-level';

const levelDB = new ClassicLevel('../../db');

const randomWords = require('random-words'); // TODO: Replace with a secure random number generator

export class OTPGenerator {
  async generateOtp(user: string) {
    const otp = randomWords({ exactly: 3, join: '-' });
    await levelDB.put(user, otp).then(() => {
      return otp;
    });
  }

  async verifyOtp(otp: string, user: string): Promise<boolean | string> {
    const storedOtp = await levelDB.get(user, { valueEncoding: 'utf8' });
    if (storedOtp === otp) {
      await levelDB.del(user);
      return true;
    }
    return false;
  }
}
