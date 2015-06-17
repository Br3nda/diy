import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    this.session.loadSession();
    this.transitionTo('maker', this.session.get('maker_url'));
  }
});
