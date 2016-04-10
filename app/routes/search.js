import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params){
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/legislators/locate?zip=" + params.zipcode + "&apikey=" + key;
    return Ember.RSVP.hash({
      remoteLegislators: Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      }),
      databaseLegislators: this.store.findAll('legislator')
    });
  },

  actions: {
    logMeOut(){
      this.transitionTo('index');
    },

    addLegislator(params){
      var model = this.currentModel;
      var foundRecord = false;
      model.databaseLegislators.forEach(function(lawmaker){
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
