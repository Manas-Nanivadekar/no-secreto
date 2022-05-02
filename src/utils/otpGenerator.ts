import { ClassicLevel } from 'classic-level';

const randomWords = require('random-words'); // TODO: Replace with a secure random number generator

export class OTPGenerator {
  async generateOtp(user: string) {
    const levelDB = new ClassicLevel('../../db', {
      valueEncoding: 'json',
    });
    const otp = randomWords({ exactly: 3, join: '-' });
    await levelDB.put(user, otp);
    return otp;
  }

  async verifyOtp(user: string, otp: string): Promise<boolean | string> {
    const levelDB = new ClassicLevel('../../db', {
      valueEncoding: 'json',
    });
    var storedOtp = await levelDB.get(user, { valueEncoding: 'utf8' });
    storedOtp = storedOtp.replace(/"/g, '');
    if (storedOtp == otp) {
      await levelDB.del(user);
      return true;
    } else {
      return false;
    }
  }
}
