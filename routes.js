const routes = require('next-routes')

module.exports = routes()
.add('UserNew', '/Users/new')
.add('User', '/User/:id')
.add('UserEdit', '/Users/:id/edit')
