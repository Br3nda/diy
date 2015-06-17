import Ember from 'ember';

export default Ember.Component.extend({
  complete: function () {
    return this.portfolio.hasCompletedChallenge(this.session, this.get('challenge'));
  }.property('complete'),
  isSignedIn: function () {
    return this.session.get('isSignedIn');
  }.property('session.isSignedIn'),
});
