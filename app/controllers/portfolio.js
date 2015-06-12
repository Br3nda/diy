import Ember from 'ember';

export default Ember.Controller.extend({
  isLoggedIn: function () {
    return this.session.isLoggedIn();
  }.property('session.token'),
  makerId: function() {

  },
  makerUrl: function() {
    return this.session.get('maker_url');
  }.property('session.maker_url')
});
