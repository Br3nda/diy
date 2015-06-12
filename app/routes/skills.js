import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('skill', {limit: 500, offset: 0});
  }
});
