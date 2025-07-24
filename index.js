const yargs = require('yargs');
const chalk = require('chalk');

const { addContacts, listContacts, removeContacts } = require('./contact');

yargs.command({
 command: 'create',
 aliases: ['c'],
 describe: `${chalk.default.green('Creating new users')}`,
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

yargs.command({
 command: 'list',
 aliases: ['l'],
 describe: `${chalk.default.green('Your Contact lists')}`,
 handler() {
  listContacts();
 },
});

yargs.command({
 command: 'remove',
 aliases: ['r'],
 describe: `${chalk.default.green('Remove contact')}`,
 builder: {
  fullname: {
   alias: 'f',
   describe: 'User Full Name',
   demandOption: true,
   type: 'string',
  },
 },
 handler({ fullname }) {
  removeContacts(fullname);
 },
});

yargs.parse();
