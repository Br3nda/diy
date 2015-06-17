import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('skills');
  this.route('skill', { path: '/s/:url' });
  this.route('portfolio');
  this.route('authorize', {path: '/sign-in'});
  this.route('maker', {path: '/m/:maker.url'});
  this.route('project', {path: '/p/:maker.url/:id'});
});

export default Router;
