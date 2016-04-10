import Ember from 'ember';

export default Ember.Component.extend({
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
