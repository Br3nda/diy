import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extract: function (store, typeClass, payload /*, id, requestType*/) {
    var response = [];

    if (Array.isArray(payload.response)){
      payload.response.forEach(function (record) {
        record = processRecord(record, store);
        response.push(record);
      });
    }
    else {
      response.push(processRecord(payload.response, store));
    }

    console.log(response);
    return response;
  },

});

var  processRecord = function (record, store) {

    if (record.maker) {
      record.maker = processMaker(record.maker, store)
    }

    //If we have clips
    if (Array.isArray(record.clips)) {
      record.clips = processClips(record.clips, store)
    }

    return record;
}

  /**
  Save maker into the store, and return the single integer id
  for the project record
  */
var  processMaker = function (maker, store) {
  store.push('maker', maker);
  return maker.id;
}

var processClips = function (clips, store) {
  var _clips = [];

  clips.forEach(function(clip) {
    //if we have assets
    store.push('clip', clip);
    _clips.push(clip.id);
  });

  return _clips;

}
