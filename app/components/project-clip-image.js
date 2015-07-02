import Ember from 'ember';

export default Ember.Component.extend({
  size: '300',
  imageUrl: function () {
    var size = this.get('size');
    return this.get('clip.assets.web_' + size + '.url');
  }.property('size,clip')
});
