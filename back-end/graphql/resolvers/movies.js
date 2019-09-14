const checkAuth =require('../../util/checkAuth')
const{AuthenticationError,UserInputError} = require('apollo-server')

module.exports={
    Query: {
        async movies() {
           
         try{
            const movies = [{ title: "Joker",year: "2019",rating:9.6},
            {title: "Once Upon a Time... in Hollywood", year: "2019",rating: 8.0},
                {title: "It Chapter Two",year: "2019",rating:7.0}]
         
          return movies;
        
          } catch (err) {
            throw new Error(err);
          }
        },
        async actors(){
            try {
                const actors =[{name:"Leonardo DiCaprio",birthday:" November 11, 1974",country:"USA"},
                {name:"Brad Pitt",birthday:"December 18, 1963 ",country:"USA"},
                {name:"Margot Robbie",birthday:" July 2, 1990",country:"Australia"}]
                return actors;
            
            } catch (error) {
                throw new Error(error);  
            }
        
        },
        async directors(){
            try {
                const directors =[{name:"Quentin Tarantino",birthday:"March 27, 1963",country:"USA"},{name:"Christopher Nolan",birthday:"July 30, 1970 ",country:"England"},{name:"Francis Ford Coppola",birthday:"April 7, 1939",country:"USA"}]
                return directors;
            
            } catch (error) {
                throw new Error(error);  
            }
        
        }
      }
}
