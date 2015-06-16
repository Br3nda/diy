import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var query = {maker: params['maker.url'], id: params['id'], limit: 1};
    return this.store.find('project', query).then(function (result) {
      debugger;
      var model = result.get('firstObject');
      return model;
    });
    
    
  }
});
