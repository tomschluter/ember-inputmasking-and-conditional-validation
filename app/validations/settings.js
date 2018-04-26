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

    // Validate the value of inputMask as you would validate any other input.
    inputMask: [
        validatePresence(true),
        validateLength({ is: 6})
    ],

    // Use validateSometimes to only validate description when enterDescription is true (the checkbox is checked).
    description: validateSometimes([
        validatePresence(true),
        validateLength({ is: 4 })
      ], function(changes, content) {
        return this.get('enterDescription');
      })
  }