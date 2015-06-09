import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['session'],
  isLoggedIn: Ember.computed.alias('controllers.session.isLoggedIn'),
  session: Ember.computed.alias('controllers.session.model'),
  token: function () {
    var session = this.get('session');
    debugger;
  }.property('token')

});
