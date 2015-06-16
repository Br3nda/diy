import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindQuery: function (query, modelName) {
    var maker = query.maker;
    delete query.maker;

    var url = '%@/%@/projects'.fmt(this._buildURL('makers'), maker);
    if (query.id) {
      url += '/'  + query.id;
      delete query.id
    }
    console.log(url);
    return url;
  },
});
