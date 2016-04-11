import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params){
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/legislators?bioguide_id=" + params.bioguideId + "&apikey=" + key;
    return Ember.RSVP.hash({
      localLegislator: this.store.query('legislator', {
        orderBy: 'bioguideId',
        equalTo: params.bioguideId
      }),
      remoteLegislator: Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results[0];
      })
    });
  },

  actions: {
    logMeOut(){
      this.transitionTo('index');
    },

    addReview(params){
      var newReview = this.store.createRecord('review', params);
      var user = params.user;
      var legislator = params.legislator;
      console.log(user);
      console.log(legislator);
      user.get('reviews').addObject(newReview);
      legislator.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        user.save();
        return legislator.save();
      });
      this.transitionTo('legislator', legislator.get('bioguideId'));

    }
  }
});
