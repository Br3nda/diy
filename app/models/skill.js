import DS from 'ember-data';

export default DS.Model.extend({
  sku: DS.attr(),
  stamp: DS.attr(),
  url: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  icons: DS.attr(),
  images: DS.attr(),
  grammar: DS.attr(),
  pole: DS.attr(),
  color: DS.attr(),
  notes: DS.attr(),
});

