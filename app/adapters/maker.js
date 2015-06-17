import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindQuery: function (query /*, modelName*/) {
    var maker = query.maker;
    delete query.maker;

    var url = '%@/%@'.fmt(this._buildURL('makers'), maker);
    console.log(url);
    return url;
  },
});
