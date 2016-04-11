import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logMeOut(){
      this.transitionTo('index');
    },
  }
});
