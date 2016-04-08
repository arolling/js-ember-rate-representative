import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  address: DS.attr(),
  zipcode: DS.attr(),
  reviews: DS.hasMany('review', {async:true}),
  

});
