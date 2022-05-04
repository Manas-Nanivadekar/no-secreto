var details = {
  accountSid: '',
  authToken: '',
  fromNumber: '',
};

export class SmsDetails {
  setSmsDetails(accountSid: string, authToken: string, fromNumber: string) {
    details.accountSid = accountSid;
    details.authToken = authToken;
    details.fromNumber = fromNumber;
    return true;
  }

  getSmsDetails() {
    if (details.accountSid !== '') {
      return {
        details,
      };
    }
    throw new Error(
      'SMS details are not defined. Please provide SMS details to send SMS to your users'
    );
  }
}
