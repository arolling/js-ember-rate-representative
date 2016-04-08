import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model(){
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=" + key;
    return Ember.RSVP.hash({
      currentUser: this.get('currentUser'),
      allUsers: this.store.findAll('user'),
      allLegislators: Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      })
    });
  },
  actions: {
    newSignUp(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    },

    newLogIn(params){
      var model = this.currentModel;
      var foundUser = false;
      model.allUsers.forEach(function(user){
        if(user.get('username') === params.username && user.get('zipcode') === params.zipcode){
          model.currentUser.logIn(user);
          foundUser = true;
        }
      });
      if(!foundUser){
        alert("Not a valid combination. Please try again.");
      } else {
        this.transitionTo('index'); //REPLACE WITH MOVE TO USER'S HOMEPAGE???
      }
    },

    logMeOut(){
      this.currentModel.currentUser.logOut();
    }
  }
});
