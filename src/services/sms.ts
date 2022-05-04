import { OTPGenerator } from '../utils/otpGenerator';
import { SmsDetails } from '../utils/smsDetails';

const setSMSDetails = (
  accountSid: string,
  authToken: string,
  fromNumber: string
) => {
  if (!accountSid || !authToken || !fromNumber) {
    throw new Error(
      'SMS details are not defined. Please provide SMS details to send SMS to your users'
    );
  }
  const result = new SmsDetails().setSmsDetails(
    accountSid,
    authToken,
    fromNumber
  );
  return result;
};

const sendSMS = async (userNumber: string) => {
  // Lib user Number details
  const smsDetails = new SmsDetails().getSmsDetails();
  const client = require('twilio')(
    smsDetails.details.accountSid,
    smsDetails.details.authToken
  );

  var isSent = false;

  const otp = await new OTPGenerator().generateOtp(userNumber);
  await client.messages
    .create({
      from: smsDetails.details.fromNumber,
      to: userNumber,
      body: 'Your OTP is: ' + otp,
    })
    .then((message: { sid: string }) => {
      console.log('SMS sent: ' + message.sid);
      isSent = true;
    })
    .catch((err: { message: string }) => {
      console.log('SMS not sent: ' + err.message);
      isSent = false;
    });

  if (isSent) {
    return true;
  } else {
    return false;
  }
};

const verifySMS = async (userNumber: string, otp: string) => {
  // Lib user Number details
  const isValid = await new OTPGenerator().verifyOtp(userNumber, otp);
  if (isValid === true) {
    return userNumber;
  } else {
    return false;
  }
};

export { setSMSDetails, sendSMS, verifySMS };
