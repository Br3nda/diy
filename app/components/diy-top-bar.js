import Ember from 'ember';

export default Ember.Component.extend({
  isSignedIn: function () {
    return this.session.get('isSignedIn');
  }.property('session.isSignedIn'),

  actions: {
    signOut: function () {
      this.session.signOut();
    }
  }
});
