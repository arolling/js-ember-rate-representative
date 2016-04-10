import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('user', {path: '/user/:user_id'});
  this.route('search', {path: '/search/:zipcode'});
  this.route('legislator', {path: '/legislator/:bioguideId'});
});

export default Router;
