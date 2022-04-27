import { EmailDetails } from '../utils/emailDetails';
import { OTPGenerator } from '../utils/otpGenerator';
const nodemailer = require('nodemailer');

const setEmailTransporter = () => {
  const defaultDetails = new EmailDetails().getLibEmailDetails();

  const transporter = nodemailer.createTransport({
    host: defaultDetails.details.host,
    port: defaultDetails.details.port,
    secure: defaultDetails.details.secure,
    auth: {
      user: defaultDetails.details.auth.user,
      pass: defaultDetails.details.auth.pass,
    },
  });

  return transporter;
};

const setEmailDetails = (email: string, password: string) => {
  if (!email || !password) {
    throw new Error(
      'Email details are not defined. Please provide email details to send emails to your users'
    );
  }
  const result = new EmailDetails().setEmailDetails(email, password);
  return result;
};

const sendOTPEmail = async (user: string) => {
  // Lib User Email details
  const emailDetails = new EmailDetails().getLibEmailDetails();
  const emailTransporter = setEmailTransporter();

  // Otp Creation
  const otp = await new OTPGenerator().generateOtp(user);

  // Sending Email
  await emailTransporter
    .sendMail({
      from: emailDetails.details.auth.user,
      to: user,
      subject: 'Your OTP for passwordless authentication',
      text: 'Your OTP is: ' + otp,
    })
    .then((info: { response: string }) => {
      console.log('Email sent: ' + info.response);
    });
};

const verifyEmail = async (user: string, otp: string) => {
  const isValid = await new OTPGenerator().verifyOtp(user, otp);
  if (isValid) {
    return true;
  } else {
    return false;
  }
};

export { setEmailDetails, verifyEmail, sendOTPEmail };
