import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params){
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/legislators/locate?zip=" + params.zipcode + "&apikey=" + key;
    console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  },

  actions: {
    logMeOut(){
      this.transitionTo('index');
    },

    addLegislator(params){
      var newLegislator = this.store.createRecord('legislator', params);
      newLegislator.save();
      console.log(newLegislator);
      this.transitionTo('legislator', newLegislator.get("bioguideId"));
    }
  }

});
