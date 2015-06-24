import Ember from 'ember';

export default Ember.Controller.extend({
  checkingCredentials: false,

  actions: {
    doAuth: function () {
      debugger;
      var username = this.get('username');
      var password = this.get('password');

      this.set('checkingCredentials', true);

      var self = this;

      this.session.signIn(username, password).then(
        function () {
          //success
          self.transitionTo('portfolio');
        },
        function () {
          //failure
          self.set('checkingCredentials', false);
        });
    }
  }
});
