const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAnOrg: true,
  },
  {
    name: 'mike Doe',
    email: 'mike@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAnOrg: true,
  },
  {
    name: 'lame Doe',
    email: 'lame@example.com',
    password: bcrypt.hashSync('123456', 10),
  },

  {
    name: 'erik Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },

  {
    name: 'mary Doe',
    email: 'mary@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

module.exports = users
