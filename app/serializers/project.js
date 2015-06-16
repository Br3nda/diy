import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extract: function (store, typeClass, payload /*, id, requestType*/) {

    var response = [];
    var _store = store;


    payload.response.forEach(function (record) {
      _store.push('maker', record.maker);
      record.maker = record.maker.id;
      response.push(record);
    });
    console.log(response);
    return response;
  }
});
