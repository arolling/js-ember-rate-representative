import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitQuery() {
      var params = {
        zipcode: this.get('queryZipcode')
      };
      this.sendAction('newQuery', params);
    }
  }
});
