import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('skills');
  this.route('skill', { path: '/skill/:url' }, function() {
    this.route('challenge', {path: ':skill/challenge/:url'});
  });

  this.route('portfolio');

  this.route('authorize', {path: '/sign-in'});

  this.route('maker', function() {
    this.route('project', {path: ':maker/project/:id'});
  });
});

export default Router;
