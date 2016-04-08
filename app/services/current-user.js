import Ember from 'ember';

export default Ember.Service.extend({
  user: {username: "Guest", zipcode: "20210"},

  logIn(user){
    this.set('user', user);
  },

  logOut(){
    this.set('user', {username: "Guest", zipcode: "20210"} );
  }
});
