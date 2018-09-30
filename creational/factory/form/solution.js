const Form = require('./form');

const form = new Form();

form.addFields(
  Form.createField(Form.FieldType.TEXT, { name: 'username', placeholder: 'Name user'}),
  Form.createField(Form.FieldType.EMAIL, { type: 'email', onchange: event => console.log(event) }),
  Form.createField(Form.FieldType.PASSWORD)
);