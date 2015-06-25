import Ember from 'ember';

export default Ember.Component.extend({
  complete: function () {
    if (this.session.get('isSignedIn')) {
      //read if this challenge is complete in the users' portfolio
      return this.portfolio.hasCompletedChallenge(this.session, this.get('challenge'));
    }
    else {
      return false;
    }
  }.property('complete'),
  isSignedIn: function () {
    return this.session.get('isSignedIn');
  }.property('session.isSignedIn'),
});
