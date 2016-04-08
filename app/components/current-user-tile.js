import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),

  actions:{
    logMeOut(){
      this.sendAction("logMeOut");
    }
  }
});
