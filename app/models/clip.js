import DS from 'ember-data';

export default DS.Model.extend({
  assets: DS.attr(), //hash
  type: DS.attr(),
  project: DS.belongsTo('project')
});
