import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindQuery: function (query, modelName) {
     return '%@/%@/challenges'.fmt(this._buildURL('skills'), query.skill);
  },

});
