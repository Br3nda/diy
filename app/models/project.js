import DS from 'ember-data';

export default DS.Model.extend({
  achievements: DS.hasMany('achievement')
});
