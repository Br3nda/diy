import Ember from 'ember';

export default Ember.Controller.extend({
  checkingCredentials: false,

  actions: {
    doAuth: function () {

      var username = this.get('username');
      var password = this.get('password');

      this.set('checkingCredentials', true);

      var self = this;

      self.session.signIn(username, password,
        //success
        function () {
          self.transitionTo('portfolio');
        },
        //fail
        function() {
        },
        //always
        function () {
          self.set('checkingCredentials', false);
        }
      );
    }
  }
});
