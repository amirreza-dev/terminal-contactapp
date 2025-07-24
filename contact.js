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
};
