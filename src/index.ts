import {
  setEmailDetails,
  sendEmail,
  verifyEmail,
  updateDefaultEmailDetails,
  turnOffEmailConsole,
  alphaNumericalOTP,
} from './services/email';

import { sendSMS, setSMSDetails, verifySMS } from './services/sms';

export {
  setEmailDetails,
  sendEmail,
  verifyEmail,
  updateDefaultEmailDetails as updateDetails,
  turnOffEmailConsole,
  sendSMS,
  setSMSDetails,
  alphaNumericalOTP,
  verifySMS,
};
