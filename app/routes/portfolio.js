import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    this.session.loadSession();
    return this.store.find('maker', this.session.get('maker_url'));
  }
});
