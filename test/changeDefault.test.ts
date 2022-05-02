import { updateDetails } from '../src/index';
import { setEmailDetails } from '../src/index';
import { EmailDetails } from '../src/utils/emailDetails';

describe('return details', () => {
  it('should return lib users email details', () => {
    updateDetails('smtp.outlook.com', 587, false);
    setEmailDetails('some@gmail.com', 'password');
    const emailDetails = new EmailDetails().getLibEmailDetails();
    console.log(emailDetails);
    expect(emailDetails).toBeTruthy();
  });
});
