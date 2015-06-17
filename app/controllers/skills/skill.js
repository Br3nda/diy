import Ember from 'ember';

export default Ember.Controller.extend({
  challenges: function () {
    return this.store.find('challenge', {'skill': this.get('model.url')});
  }.property('model.challenges.[]')
});
