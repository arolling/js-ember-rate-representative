import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', {async:true}),
  posted: DS.attr('date', {
    defaultValue() {return new Date();}
  }),
  rating: DS.attr('number'), //1 through 5 stars? out of 10?
  details: DS.attr(),
  legislator: DS.belongsTo('legislator', {async:true})
  
});
