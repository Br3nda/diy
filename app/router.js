import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('portfolio');

  this.route('skills', {path: '/skills'}, function() {
    this.route('skill', {path: 's/:url'});
  });

  this.route('authorize', {path: '/sign-in'});

  this.route('maker', {path: '/m/:maker.url'}, function() {
    this.route('project', {path: 'p/:id'});
    this.route('badges');
  });

  this.route('project', {path: 'p'}, function () {
    this.route('new', {path: 'new'});
  });
});

export default Router;
