import Ember from 'ember';

export default Ember.Service.extend({
  user: {username: "Guest", zipcode: "20210", id: 0},

  logIn(user){
    this.set('user', user);
  },

  logOut(){
    this.set('user', {username: "Guest", zipcode: "20210"} );
  }
});
