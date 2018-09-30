const { TextField, EmailField, PasswordField } = require('./form-fields');

class FormFieldFactory {
  static createField(type, props) {
    if (Form.FieldTypes[type]) {
      return new Form.FieldTypes[type](props);
    } else {
      throw new Error(`Invalid field type: ${type}`);
    }
  }
}

FormFieldFactory.FieldTypes = {
  TEXT: TextField,
  EMAIL: EmailField,
  PASSWORD: PasswordField
};

module.exports = FormFieldFactory;