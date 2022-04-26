import { setEmailDetails } from '../src/index';
import { EmailDetails } from '../src/utils/emailDetails';

describe('set details', () => {
  it('should set lib users details', () => {
    const result = setEmailDetails('email@email.com', 'password');
    expect(result).toBe(true);
  });
});

describe('get details', () => {
  it('should get lib users email details', () => {
    setEmailDetails('email@email.com', 'password');
    const emailDetails = new EmailDetails().getLibEmailDetails();
    expect(emailDetails).toBeTruthy();
  });
});
