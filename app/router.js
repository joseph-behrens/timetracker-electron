import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('report', function() {
    this.route('client', {path: "/client/:client_name"});
  });
  this.route('timer');
});

export default Router;
