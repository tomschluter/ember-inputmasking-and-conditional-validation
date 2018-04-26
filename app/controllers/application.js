import Controller from '@ember/controller';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import Validations from './../validations/settings';

export default Controller.extend({
    init(){
        this._super(...arguments);
        let model = {};

        // define a changeset that we'll use in the form to handle validations before allowing to submit.
        let changeset = new Changeset(model, lookupValidator(Validations), Validations);
        this.set('changeset', changeset);

        // Set options for ember-inputmask
        let options = {
            placeholder:"-"
        }
        this.set("options", options);
    },

    actions: {
        submit(model) {
            alert('submitted');
            // Show that the submit was succesful by logging the value of inputMask.
            console.log(model.get("inputMask"));
        }
      }
});
