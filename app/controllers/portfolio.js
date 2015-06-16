import Ember from 'ember';

export default Ember.Controller.extend({
  achievements: function () {
    var assertions = this.store.find('achievement', {maker: this.get('model.url')});
  }.property('@each.achievements')
});
