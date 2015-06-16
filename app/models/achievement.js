import DS from 'ember-data';

export default DS.Model.extend({
  stamp: DS.attr(),
  status: DS.attr(),
  maker: DS.belongsTo('maker', {async: true}),
  challenge: DS.belongsTo('challenge', {async: true}),
  skill: DS.belongsTo('skill', {async: true}),
  project: DS.belongsTo('project', {async: true}),
});
