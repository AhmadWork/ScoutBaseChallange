const { gql } = require('apollo-server');

module.exports = gql`
  directive @auth on FIELD_DEFINITION
 type Movie {
    title: String!
    year: String!
    rating: Float!
    scoutbase_rating:Float! @auth 
    
  }
  type Actor {
      name:String!
      birthday:String!
      country:String
  }
  type Director {
      name:String!
      birthday:String!
      country:String!
      
  }
  type User {
    id: ID!
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