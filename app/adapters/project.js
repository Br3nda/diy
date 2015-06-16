import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindQuery: function (query, modelName) {
    var maker = query.maker;
    delete query.maker;
    return '%@/%@/projects'.fmt(this._buildURL('makers'), maker);
  },
});
