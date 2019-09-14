const moviesResolvers = require('./movies');
const usersResolvers = require('./users');

module.exports = {
  Movie:{
    scoutbase_rating(){
      return  Math.random() * (9.0 - 5.0) + 5.0;
    }
  },
  Query: {
    ...moviesResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
   


  }
};