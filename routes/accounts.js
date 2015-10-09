"use strict";
let AccountSerializer = require('./../serializers/account');

module.exports = function(request, reply) {
  const datas = [
    {id: 1, name: 'account test 1', phone: '0600000001', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id: 1}]},
    {id: 2, name: 'account test 2', phone: '0600000002', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:2}]},
    {id: 3, name: 'account test 3', phone: '0600000003', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:3}]},
    {id: 4, name: 'account test 4', phone: '0600000004', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:4}]},
    {id: 5, name: 'account test 5', phone: '0600000005', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:5}]},
    {id: 6, name: 'account test 6', phone: '0600000006', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:6}]},
    {id: 7, name: 'account test 7', phone: '0600000007', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:7}]},
    {id: 8, name: 'account test 8', phone: '0600000008', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:8}]},
    {id: 9, name: 'account test 9', phone: '0600000009', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:9}]},
    {id: 10, name: 'account test 10', phone: '0600000010', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:10}]},
    {id: 11, name: 'account test 11', phone: '0600000011', shippingAdress: '1 rue gabriel girondon Sant-Quentin', billingAdress: 'INSSET Saint-quentin', contacts: [{id:11}]}
  ];
  reply(new AccountSerializer(datas).serialize());
}
