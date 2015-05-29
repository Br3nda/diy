import DS from 'ember-data';

let Skill = DS.Model.extend({
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

Skill.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Cleaner' }
  ]
});

export default Skill;
