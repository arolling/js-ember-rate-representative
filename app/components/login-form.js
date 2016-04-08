import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logIn(){
      var params = {
        username: this.get('username'),
        zipcode: this.get('zipcode')
      };
      if(params.username === undefined || params.zipcode === undefined){
        alert("Please complete both fields"); // replace with materialize toast???
      } else {
        this.set('username', '');
        this.set('zipcode', '');
        this.sendAction('newLogIn', params);
      }
    }
  }
});
