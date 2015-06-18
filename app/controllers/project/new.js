import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    savePost: function () {
      var title = this.get('title');
      var post = this.store.createRecord('project', {title: title});
      post.save();
    }
  }
});
