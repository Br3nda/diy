import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('skills');
  this.route('skill', { path: '/skill/:url' }, function() {
    this.route('challenge', {path: '/skill/:skill/challenge/:url'});
  });
  this.route('portfolio', function() {
    this.route('badges');
  });
  this.route('authorize', {path: '/sign-in'});
  
});

export default Router;
