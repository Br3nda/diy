import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr(),
  url: DS.attr(),
  email: DS.attr(),
  avatar: DS.attr(),
  portfolio: DS.attr(),
  stats: DS.attr(),
  achievements: DS.hasMany('achievement')
});
