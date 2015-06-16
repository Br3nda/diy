import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindQuery: function (query/*, modelName*/) {
    //Read items from the query, so we can move to the url
    var maker = query.maker;
    delete query.maker;

    var project = query.project;
    delete query.project;

    return '%@/%@/projects/%@/comments'.fmt(this._buildURL('makers'), maker, project);
  },
});
