import Ember from 'ember';

export function ratingStars(params) {
  var rating = params[0];
  var stars = '';
  while(rating > 0){
    rating--;
    stars += '<i class="material-icons">grade</i>';
  }
  return Ember.String.htmlSafe(stars);
}

export default Ember.Helper.helper(ratingStars);
