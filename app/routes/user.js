import Ember from 'ember';


export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model(params) {
    return Ember.RSVP.hash({
      currentUser: this.get('currentUser'),
      profile: this.store.findRecord('user', params.user_id),
    });
  },

  actions: {
    logMeOut(){
      this.transitionTo('index');
    },

    submitQuery(params){
      this.transitionTo('search', params.zipcode);
    }
  }
});
