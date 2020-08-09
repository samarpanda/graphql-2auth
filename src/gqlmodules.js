const { GraphQLModule } = require('@graphql-modules/core');
const all = require('./all');

const gqlmodules = new GraphQLModule({
  imports: [all]
});

module.exports = gqlmodules;
