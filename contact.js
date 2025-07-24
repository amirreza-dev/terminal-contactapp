const fs = require('fs');
const chalk = require('chalk');

const addContacts = (fullname, phone, email) => {
 const contacts = loadContacts();

 const duplicate = contacts.find((contact) => contact.fullname === fullname);

 if (!duplicate) {
  contacts.push({ fullname, phone, email });

  savedContacts(contacts);

  console.log(chalk.default.cyan('Contact Saved.'));
 } else {
  console.log(chalk.default.red('Contact Already Existing.'));
 }
};

const listContacts = () => {
 const contacts = loadContacts();

 if (contacts.length > 0) {
  console.log(`${chalk.default.yellow('Your Contacts:\n')}`);

  contacts.forEach((contact) => {
   console.log(`\t${chalk.default.blue('Fullname:')} ${contact.fullname}`);
   console.log(`\t${chalk.default.blue('Phone:')} ${contact.phone}`);
   console.log(`\t${chalk.default.blue('Email:')} ${contact.email}`);
   console.log(chalk.default.redBright('\t---------------------------'));
  });
 }
};

const removeContacts = (fullname) => {
 const contacts = loadContacts();
 const filterdContacts = contacts.filter(
  (contact) => contact.fullname != fullname
 );

 if (contacts.length > filterdContacts.length) {
  savedContacts(filterdContacts);
  console.log(chalk.default.green(`${fullname} has been removed.`));
 } else {
  console.log(chalk.default.red('Contact not found!'));
 }
};

const loadContacts = () => {
 try {
  const dataBuffer = fs.readFileSync('contact.json');
  const contacts = dataBuffer.toString();
  return JSON.parse(contacts);
 } catch (error) {
  return [];
 }
};

const savedContacts = (contacts) => {
 const data = JSON.stringify(contacts);
 fs.writeFileSync('contact.json', data);
};

module.exports = {
 addContacts,
 listContacts,
 removeContacts,
};
