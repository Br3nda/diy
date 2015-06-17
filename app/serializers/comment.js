import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extract: function (store, typeClass, payload /*, id, requestType*/) {
    var response = [];

    payload.response.forEach(function (record) {
        var maker = record.maker;
        store.push('maker', maker);
        record.maker = maker.id;
        response.push(record);
    });

    return response;
  },

});
