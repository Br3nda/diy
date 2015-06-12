import DS from 'ember-data';

export default DS.Model.extend({
  active: DS.attr(),
  title: DS.attr(),
  short: DS.attr(),
  description: DS.attr(),
  stats: DS.attr(),
  meta: DS.attr(),
  image: DS.attr(),
});
