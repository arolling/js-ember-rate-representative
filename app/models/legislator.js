import DS from 'ember-data';

export default DS.Model.extend({
  bioguideId: DS.attr(),
  reviews: DS.hasMany('review', {async:true}),
  
});
