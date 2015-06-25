import Ember from 'ember';

export default Ember.Component.extend({
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
