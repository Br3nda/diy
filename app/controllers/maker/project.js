import Ember from 'ember';

export default Ember.Controller.extend({
  comments: function () {
    var query = {maker: this.model.get('maker.url'), project: this.model.get('id')};
    return this.store.find('comment', query);
  }.property('@each.model.comments'),

  // stats: function () {
  //   return this.get('stats')
  // }.property('model.stats')
});