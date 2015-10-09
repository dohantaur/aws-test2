"use strict";
var JSONAPISerializer = require('jsonapi-serializer');

module.exports = class ContactSerializer {
  constructor(data) {
    this.data = data;
  }
  serialize() {
    return new JSONAPISerializer('contacts', this.data, {
      topLevelLinks: { self: 'http://localhost:3000/api/contacts' },
      dataLinks: {
        self(contact) {
          return 'http://localhost:3000/api/contacts/' + contact.id
        }
      },
      attributes: ['name', 'phone']
    });
  }
}
