import Ember from 'ember';

export default Ember.Controller.extend({
  isLoggedIn: function () {
    console.log("Checking if logged in");
    return !!(this.session.get('token'));
  }.property('auth.token')
});
