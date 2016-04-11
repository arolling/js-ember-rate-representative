import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  radioSelection: '1',
  actions:{
    submitReview(){
      var params = {
        user: this.get('currentUser').get('user'),
        rating: this.get('radioSelection'),
        details: this.get('details'),
        legislator: this.get('legislator')
      };
      console.log(params);
      this.set('details', '');
      this.sendAction('addReview', params);
    }
  }
});
