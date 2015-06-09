import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectSkill: function (skill) {
      console.log(skill.get('url'));
    }
  }
});
