import { EmailDetails } from '../utils/emailDetails';
import { OTPGenerator } from '../utils/otpGenerator';
const nodemailer = require('nodemailer');

var emailConsole = true;

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

const turnOffEmailConsole = () => {
  emailConsole = false;
};

const alphaNumericalOTP = () => {
  new OTPGenerator().generateAlphaNumericalOtp();
  return true;
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

const sendEmail = async (user: string) => {
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

      html: `<div>
      <h1>Your otp is <span style="border-radius: 8px;
      display: block;
      width: max-content;
      height: max-content;
      background: #333;
      color: white;
      font: 19px Monaco;
      padding: 0 15px;
      margin-top: 1rem;
      position: relative;"
      >${otp}</span></h1>
    </div>`,
    })
    .then((info: { response: string }) => {
      if (emailConsole === true) {
        console.log('Email sent: ' + info.response);
        return info.response;
      } else {
        return info.response;
      }
    });
  return true;
};

const updateDefaultEmailDetails = (
  host: string,
  port: number,
  secure: boolean
) => {
  const result = new EmailDetails().updateDefaultEmailDetails(
    host,
    port,
    secure
  );
  return result;
};

const verifyEmail = async (user: string, otp: string) => {
  const isValid = await new OTPGenerator().verifyOtp(user, otp);
  if (isValid === true) {
    return user;
  } else {
    return false;
  }
};

export {
  setEmailDetails,
  verifyEmail,
  sendEmail,
  turnOffEmailConsole,
  alphaNumericalOTP,
  updateDefaultEmailDetails,
};
