import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newSignUp(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    }
  }
});
