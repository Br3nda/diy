import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    this.session.loadSession();
  },
  model: function (params) {
    return this.store.find('maker', this.session.get('maker_url'));
  }
});
