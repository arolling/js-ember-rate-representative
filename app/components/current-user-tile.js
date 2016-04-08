import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),

  actions:{
    logMeOut(){
      this.get('currentUser').logOut();
      this.sendAction("logMeOut");
    }
  }
});
