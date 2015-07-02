import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindQuery: function (query /*, modelName*/) {
    if (query.id) {
      var maker = query.maker;
      delete query.maker;

      var url = '%@/%@/projects'.fmt(this._buildURL('makers'), maker);
      if (query.id) {
        url += '/'  + query.id;
        delete query.id;
      }
      return url;
    }
    else {
      return '%@/search/projects'.fmt(this._buildURL());
    }
  },

});
