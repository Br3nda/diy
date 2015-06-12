import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('skills');
  this.route('skill', { path: '/skill/:skill_id' });
  this.route('portfolio');
  this.route('authorize', {path: '/sign-in'});
  
});

export default Router;
