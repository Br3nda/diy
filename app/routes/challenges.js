import Ember from 'ember';

export default Ember.Route.extend({
  skill: DS.belongsTo('skill')
});
