import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('skills', {path: '/skills'}, function() {
    this.route('skill', {path: 's/:url'});
  });

  this.route('authorize', {path: '/sign-in'});

  this.route('maker', {path: '/m/:maker.url'}, function() {
    this.route('project', {path: 'p/:id'});
  });
  this.route('search', function() {});

  this.route('portfolio', function() {
    this.route('projects');
    this.route('skills');
  });
});

export default Router;
