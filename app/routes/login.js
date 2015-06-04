import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn: function() {
      debugger;
      var route = this;
      this.get('session').open('diy').then(function() {
        route.transitionTo('index');
      }, function() {
        console.log('auth failed');
      });
    }
  }
});
