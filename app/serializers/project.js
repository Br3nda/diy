import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extract: function (store, typeClass, payload /*, id, requestType*/) {

    var response = [];
    var _store = store;

    var processRecord = function (record) {
      if (record.maker) {
          _store.push('maker', record.maker);
          record.maker = record.maker.id;
      }
      if (record.clips) {
        var clips = [];
        record.clips.forEach(function (clip) {
          if (clip.assets) {
            var assets = [];
            clip.assets.forEach(function (asset) {
              store.push(asset);
              assets.push(asset.id);
            });
            clip.assets = assets;
          }
          _store.push(clip);
          clips.push(clip.id);

        });
        record.clips = clips;
      }
    }

    if (Array.isArray(payload.response)){
      payload.response.forEach(function (record) {
        response.push(processRecord(record));
      });
    }
    else {
      response.push(processRecord(payload.response));
    }

    console.log(response);
    return response;
  }
});
