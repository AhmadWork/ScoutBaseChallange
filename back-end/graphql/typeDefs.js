const { gql } = require('apollo-server');

module.exports = gql`
  type Movie {
    id: ID!
    title: String!
    year: String!
    rating: Int!
    scoutbase_rating:Int!
    
  }
  type Actor {
      id:ID!
      name:String!
      birthday:String!
      country:String
  }
  type Director {
      id:ID!
      name:String!
      country:String!
      birthday:String!
      
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
   
  }
  type Query {
    movies: [Movie]
    actors: [Actor]
    directors:[Director]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    

  }
`;