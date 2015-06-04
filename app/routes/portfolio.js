import Ember from 'ember';

export default Ember.Route.extend({
  myMaker: Ember.computed.alias('controllers.session.myMaker'),
  model: function () {
    debugger;
    var myMaker = this.get('myMaker');
    return this.store.find('maker', myMaker.get('id'));
  }
});
