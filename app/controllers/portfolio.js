import Ember from 'ember';

export default Ember.Controller.extend({

  projects: function () {
    return this.store.find('project', {maker: this.get('model.url'), limit: 8});
  }.property('@each.projects'),

  achievements: function () {
    return this.store.find('achievement', {maker: this.get('model.url'), limit: 8});
  }.property('@each.achievements'),

  isSignedIn: function () {
    return this.session.get('isSignedIn');
  }.property('isSignedIn')
});
