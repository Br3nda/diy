import DS from 'ember-data';

let Skill = DS.Model.extend({
  sku: DS.attr(),
  stamp: DS.attr(),
  url: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
});

Skill.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Cleaner' }
  ]
});

export default Skill;
