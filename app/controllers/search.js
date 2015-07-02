import Ember from 'ember';

export default Ember.Controller.extend({

  results: function() {
    if (this.get('queryString')) {
      var query = {
              rank: 'trending',
              q: this.get('queryString'),
              limit: this.get('limit'),
              offset: this.get('offset')
            }


      this.set('isDoingSearchQuery', true);
      var results = this.store.find('project', query);

      self = this;
      results.then(function () {
        self.set('isDoingSearchQuery', false);
      });

      return results;
    }

  }.property('@each.results,queryString'),

  queryString: '',
  isDoingSearchQuery: false,
  offset: 0,
  limit: 100,

  actions: {
    doSearch: function () {

      var q = this.get('q');
      this.set('queryString', q);
    }

  },


});
