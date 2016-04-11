import Ember from 'ember';

export function alreadyAdded(params) {
  var thisID = params[0];
  var entries = params[1];
  var found = false;
  entries.forEach(function(entry){
    if(entry.get('bioguideId') === thisID){
      found = true;
    }
  });
  return found;
}

export default Ember.Helper.helper(alreadyAdded);
