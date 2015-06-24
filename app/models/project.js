import DS from 'ember-data';

export default DS.Model.extend({
  maker: DS.belongsTo('maker', {async: true}),
  achievements: DS.hasMany('achievement'),
  stamp: DS.attr(),
  stats: DS.attr(),
  title: DS.attr(),
  clips: DS.hasMany('clip', {async: true}),

  firstClip: function () {
    return this.get('clips').then(function (record) {
      return record.get('firstObject');
    });
  }.property('clips')
});

