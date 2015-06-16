import DS from 'ember-data';

export default DS.Model.extend({
  maker: DS.belongsTo('maker', {async: true}),
  achievements: DS.hasMany('achievement'),
  stamp: DS.attr(),
  stats: DS.attr(),
  title: DS.attr(),


});

