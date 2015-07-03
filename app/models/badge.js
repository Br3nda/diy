import DS from 'ember-data';

export default DS.Model.extend({
  maker: DS.hasMany('makers')
});
