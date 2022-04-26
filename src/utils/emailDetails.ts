var details = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
};
var isValSet: boolean = false;

export class EmailDetails {
  setEmailDetails(user: string, pass: string) {
    details.auth.user = user;
    details.auth.pass = pass;
    isValSet = true;
    return true;
  }

  updateDefaultEmailDetails(host: string, port: number, secure: boolean) {
    details.host = host;
    details.port = port;
    details.secure = secure;
    return true;
  }

  getLibEmailDetails() {
    if (isValSet === true) {
      return {
        details,
      };
    }
    throw new Error(
      'Email details are not defined. Please provide email details to send emails to your users'
    );
  }
}
