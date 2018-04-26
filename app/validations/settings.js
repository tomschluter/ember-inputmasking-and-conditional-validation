import { 
    validatePresence, 
    validateLength,
    validateFormat
  } from 'ember-changeset-validations/validators';
import validateSometimes from 'ember-changeset-conditional-validations/validators/sometimes';
  
  export default {
    firstName: [
      validatePresence(true),
      validateLength({ min: 2 })
    ],
    lastName: [
      validatePresence(true),
      validateLength({ min: 2 })
    ],
    inputMask: [
        validatePresence(true),
        validateLength({ is: 6})
    ],
    aboutMe: validateSometimes([
        validatePresence(true),
        validateLength({ is: 4 })
      ], function(changes, content) {
        return this.get('terms');
      })
  }