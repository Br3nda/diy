import DS from 'ember-data';

export default DS.Model.extend({
  stamp: DS.attr(),
  reply: DS.attr(),
  flagged: DS.attr(),
  reviewed: DS.attr(),
  raw: DS.attr(),
  html: DS.attr(),
  maker: DS.belongsTo('maker'),
  project: DS.belongsTo('project')
});
