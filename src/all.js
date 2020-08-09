const { GraphQLModule } = require('@graphql-modules/core');
const resolvers = require('./resolvers');
const typeDefs = require('./typedefs');

const all = new GraphQLModule({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: (data) => {
    return {
      ...data
    };
  }
});

module.exports = all;
