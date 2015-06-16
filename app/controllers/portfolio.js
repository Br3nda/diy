import Ember from 'ember';

export default Ember.Controller.extend({
  achievements: function () {
    return this.store.find('achievement', {maker: this.get('model.url')});
  }.property('@each.achievements')
});
