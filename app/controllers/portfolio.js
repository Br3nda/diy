import Ember from 'ember';

export default Ember.Controller.extend({
  projects: function () {
    var query = {
        maker: this.get('model.url'),
        limit: this.get('projectsPerLoad'),
        offset: this.get('projectOffset')
      };

    return this.store.find('project', query);

  }.property('projects,projectOffset'),

  projectOffset: 4,
  projectsPerLoad: 10,
  actions: {
    loadMoreProjects: function () {
      this.incrementProperty('projectOffset', this.get('projectsPerLoad'));
    }
  }


});
