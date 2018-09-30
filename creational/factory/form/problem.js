const { TextField, EmailField, PasswordField } = require('./form-fields');
const Form = require('./form');

const form = new Form();

form.addFields(
  new TextField(),
  new EmailField(),
  new PasswordField()
);