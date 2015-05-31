import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('skills');
  this.route('skill', { path: '/skill/:skill_id' });
  this.route('achievements');
  this.route('challenges');
  this.route('clips');
  this.route('comments');
  this.route('friends');
  this.route('makers');
  this.route('projects');
  this.route('open-badges');
  this.route('portfolio');
});

export default Router;
