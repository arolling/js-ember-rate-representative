import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('legislator.first_name', 'legislator.last_name', function(){
    return this.get('legislator.title') + ' ' + this.get('legislator.first_name') + ' ' + this.get('legislator.last_name');
  }),

  repDetails: Ember.computed('legislator.chamber', function(){
    var possessive;
    if (this.get('legislator.gender') === 'F') {
      possessive = 'Her';
    } else {
      possessive = 'His';
    }
    if(this.get('legislator.chamber') === 'house'){
      return this.get('legislator.state_name') + "'s district " + this.get('legislator.district') + " in the House of Representatives. " + possessive + " current term ends " + moment(this.get('legislator.term_end')).format('LL') + ". " + possessive + " official phone number is " + this.get('legislator.phone');
    }
  })
});
