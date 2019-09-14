const express = require('express');
const { ApolloServer } = require( 'apollo-server-express');

const app = express();

const typeDefs =require('./graphql/typeDefs');

const resolvers = require('./graphql/resolvers')
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:({req})=>({req})
});

server.applyMiddleware({ app, path: '/graphql' });


app.listen({ port: 5000 }, () => {
    console.log('Apollo Server on http://localhost:5000/graphql');
  });
