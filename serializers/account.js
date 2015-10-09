"use strict";
var JSONAPISerializer = require('jsonapi-serializer');

module.exports = class AccountSerializer {
  constructor(data) {
    this.data = data;
  }
  serialize() {
    return new JSONAPISerializer('accounts', this.data, {
      topLevelLinks: {
        self(payload){
          if(!Array.isArray(payload)) {
            return `http://localhost:3000/api/accounts/${payload.id}`
          }
          return 'http://localhost:3000/api/accounts';
        }
      },
      dataLinks: {
        self(account) {
          return 'http://localhost:3000/api/accounts/' + account.id
        }
      },
      attributes: ['name', 'phone', 'shippingAdress', 'billingAdress', 'contacts'],
      contacts: {
        ref: 'id',
        attributes: ['id'],
        includedLinks: {
          self: function (dataSet, contact) {
            return 'http://localhost:3000/api/contacts/' + contact.id;
          }
        },
        relationshipLinks: {
          self(account) {
            console.log('TRUC');
            console.log(account);
            return `http://localhost:3000/accounts/${account.id}/contacts`
          }
        }
      }
    });
  }
}
