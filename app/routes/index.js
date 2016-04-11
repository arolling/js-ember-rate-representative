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
      }),
      localLegislators: this.store.findAll('legislator')
    });
  },
  actions: {
    newSignUp(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.currentModel.currentUser.logIn(newUser);
      this.transitionTo('user', newUser.get('id'));
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
        this.transitionTo('user', model.currentUser.user.get('id'));
      }
    },

    logMeOut(){
      this.transitionTo('index');
    },

    submitQuery(params){
      this.transitionTo('search', params.query);
    },

    addLegislator(params){
      var model = this.currentModel;
      var foundRecord = false;
      model.localLegislators.forEach(function(lawmaker){
        if(lawmaker.get('bioguideId') === params.bioguideId){
          foundRecord = true;
        }
      });
      if (foundRecord === false){
        var newLegislator = this.store.createRecord('legislator', params);
        newLegislator.save();
        console.log(newLegislator);
      }
      this.transitionTo('legislator', params.bioguideId);
    }
  }
});
