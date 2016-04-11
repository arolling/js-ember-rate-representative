import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitZipQuery() {
      var params = {
        query: "/locate?zip=" + this.get('queryZipcode')
      };
      this.sendAction('newQuery', params);
    },
    submitStringQuery() {
      var params = {
        query: "?query=" + this.get('queryString')
      };
      this.sendAction('newQuery', params);
    }
  }
});
