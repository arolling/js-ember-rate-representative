import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signUpNew(){
      var params = {
        username: this.get('usernameNew'),
        zipcode: this.get('zipcodeNew') ? this.get('zipcodeNew') : '',
        address: this.get('addressNew') ? this.get('addressNew') : ''
      };
      this.set('usernameNew', '');
      this.set('zipcodeNew', '');
      this.set('addressNew', '');
      this.sendAction('newSignUp', params);
    }
  }
});
