import Ember from 'ember';

export default Ember.Controller.extend({
  projects: function () {
    return this.store.find('project', {maker: this.get('model.url'), limit: 8});
  }.property('model.projects'),

});
