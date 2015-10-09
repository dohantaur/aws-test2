exports.apiRoutes = [
  {
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    path:'/',
    handler(request, reply) {
      reply('Hello to best app');
    }
  },
  // Account routes
  {
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    path:'/api/accounts',
    handler: require('../routes/accounts')
  },
  {
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    path:'/api/accounts/{id}',
    handler: require('../routes/account')
  },
  // Contact routes
  {
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    path:'/api/contacts',
    handler: require('../routes/contacts')
  },
]
