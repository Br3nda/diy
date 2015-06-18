import Ember from 'ember';

export default Ember.Component.extend({
  isSignedIn: function () {
    return this.session.get('isSignedIn');
  }.property('session.isSignedIn'),
  menuActive: false,
  actions: {
    signOut: function () {
      this.session.signOut();
    },
    showMenu: function () {
      this.set('menuActive', !this.get('menuActive'));
    },

  }
});
