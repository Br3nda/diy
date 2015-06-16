import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindQuery: function (query, modelName) {
     return '%@/%@/achievements'.fmt(this._buildURL('makers'), query.maker);
  },
});
