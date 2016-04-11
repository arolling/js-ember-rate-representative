import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['birthday:asc'],
  sortedLegislators: Ember.computed.sort('legislators', 'sortBy'),

  actions: {
    addLegislator(lawmaker){
      console.log(lawmaker);
      var params = {
        bioguideId: lawmaker.bioguide_id
      };
      this.sendAction('addLegislator', params);
    }
  }
});
