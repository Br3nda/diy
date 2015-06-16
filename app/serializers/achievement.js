import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extract: function (store, typeClass, payload /*, id, requestType*/) {

    var response = [];
    var _store = store;
  //   // response.makers = [];
  //   // response.projects = [];
  //   // response.skills = [];

    payload.response.forEach(function (record) {
      _store.push('skill', record.skill);
      record.skill = record.skill.id;

      _store.push('project', record.project);
      record.project = record.project.id;

      _store.push('maker', record.maker);
      record.maker = record.maker.id;

      _store.push('challenge', record.challenge);
      record.challenge = record.challenge.id;

      response.push(record);
    });
    console.log(response);
    return response;
  }
});
