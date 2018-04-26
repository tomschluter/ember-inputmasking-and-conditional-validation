import Controller from '@ember/controller';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import Validations from './../validations/settings';

export default Controller.extend({
    init(){
        this._super(...arguments);
        let model = {};
        let changeset = new Changeset(model, lookupValidator(Validations), Validations);
        this.set('changeset', changeset);
    },

    actions: {
        submit(model) {
            alert('submitted');
            console.log(model.get("inputMask"));
        }
      }
});
