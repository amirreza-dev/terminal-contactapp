const yargs = require('yargs');

const { addContacts } = require('./contact');

yargs.command({
 command: 'create',
 aliases: ['c'],
 describe: 'Creating new users',
 builder: {
  fullname: {
   alias: 'f',
   describe: 'User Full Name',
   demandOption: true,
   type: 'string',
  },
  phone: {
   alias: 'p',
   describe: 'User Phone Number',
   demandOption: true,
   type: 'number',
  },
  email: {
   alias: 'e',
   describe: 'User Email Address',
   demandOption: true,
   type: 'string',
  },
 },
 handler({ fullname, phone, email }) {
  addContacts(fullname, phone, email);
 },
});

yargs.parse();
