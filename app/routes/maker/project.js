import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    //read the model for our parent
    var maker = this.modelFor('maker');
    //save for later use
    this.set('maker', maker);

    
    var query = {
      maker: maker.get('url'),
      id: params['id'], 
      limit: 1
    };
    
    return this.store.find('project', query).then(function (result) {
      var model = result.get('firstObject');
      return model;
    });
  },
    
});
