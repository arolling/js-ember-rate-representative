import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params){
    var key = config.myApiKey;
    console.log(params);
    var url = "http://congress.api.sunlightfoundation.com/legislators/locate?zip=" + params.zipcode + "&apikey=" + key;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  },

  actions: {
    logMeOut(){
      this.transitionTo('index');
    },
  }

});
