"use strict";
let Hapi = require('hapi');
let Good = require('good');

let server = new Hapi.Server();
server.connection({
  port: 3000
});

server.route(require('./config/routes').apiRoutes);

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*',
        error: '*',
        request: '*'
      }
    }]
  }
}, function(err) {
  if (err) {
    throw err; // something bad happened loading the plugin
  }
  server.start(function() {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});
