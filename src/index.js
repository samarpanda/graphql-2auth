const { ApolloServer } = require('apollo-server');
const gqlmodules = require('./gqlmodules');
const { typeDefs, resolvers } = gqlmodules;
const { createToken, getUserFromToken } = require('./auth');
const db = require('./db');
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    const token = req.headers.authorization;
    const user = getUserFromToken(token);
    return { ...db, user, createToken };
  }
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 server ready at ${url}`);
});
