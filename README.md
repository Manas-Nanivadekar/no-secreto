# os-passwordless

Fast, Unopinionated, Minimalistic Passwordless Authentication Library for NodeJs.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

For npm

```console
npm install os-passwordless
```

For yarn

```console
yarn add os-passwordless
```

## Usage

1. Set your personal email id and password in order to send emails

```javascript
import { setEmailDetails } from 'os-passwordless';

const setDetails = setEmailDetails('your@emailid.com', 'yourpassword');
```

2. Start using the library to send emails to your user

```javascript
import { sendEmail } from 'os-passwordless';

const sendEmailToUser = sendEmail('users@emailId.com');
```

3. Verify the user's email id

```javascript
import { verifyEmail } from 'os-passwordless';

const verifyEmailId = verifyEmail('users@emailId.com', 'verificationCode/OTP');
```

---

**NOTE**

The third method will return the email if verified successfully. If the email
is not verified, it will return an false.

---
