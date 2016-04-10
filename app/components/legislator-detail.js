import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('legislator.first_name', 'legislator.last_name', function(){
    return this.get('legislator.title') + ' ' + this.get('legislator.first_name') + ' ' + this.get('legislator.last_name');
  })
});
