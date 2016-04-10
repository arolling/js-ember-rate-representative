import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params){
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/legislators?bioguide_id=" + params.bioguideId + "&apikey=" + key;
    console.log(url);
    return Ember.RSVP.hash({
      localLegislator: this.store.query('legislator', {
        orderBy: 'bioguideId',
        equalTo: params.bioguideId
      }),
      remoteLegislator: Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results[0];
      })
    });
  }
});
