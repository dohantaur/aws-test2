"use strict";
let ContactSerializer = require('./../serializers/contact');

module.exports = function(request, reply) {
  const datas = [
    {id: 1, name: 'contact test 1', phone: '0600000001'},
    {id: 2, name: 'contact test 2', phone: '0600000002'},
    {id: 3, name: 'contact test 3', phone: '0600000003'},
    {id: 4, name: 'contact test 4', phone: '0600000004'},
    {id: 5, name: 'contact test 5', phone: '0600000005'},
    {id: 6, name: 'contact test 6', phone: '0600000006'},
    {id: 7, name: 'contact test 7', phone: '0600000007'},
    {id: 8, name: 'contact test 8', phone: '0600000008'},
    {id: 9, name: 'contact test 9', phone: '0600000009'},
    {id: 10, name: 'contact test 10', phone: '0600000010'},
    {id: 11, name: 'contact test 11', phone: '0600000011'}
  ];
  reply(new ContactSerializer(datas).serialize());
}
