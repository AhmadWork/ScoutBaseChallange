const checkAuth =require('../../util/checkAuth')
const{AuthenticationError,UserInputError} = require('apollo-server')

module.exports={
    Query: {
        async movies(context) {
            const user = checkAuth(context);
         try{
            const movies = [{ 
                title: "once ubon time",
                year: "2019",
                rating:4
                },{title: "once ubon timae",
            year: 3,
            rating: "2d0"},{title: "once ubonas time",
            year: "20ds19",
            rating: 1}]
          if(!user){
            for (let value of movies) {
                value.scoutbase_rating=Math.floor(Math.random() * 5) + 5;
            }
          return movies;
          }else{
            
            return movies;
          }
        
          } catch (err) {
            throw new Error(err);
          }
        },
        async actors(){
            try {
                const actors =[{},{},{}]
                return actors;
            
            } catch (error) {
                throw new Error(error);  
            }
        
        },
        async directors(){
            try {
                const directors =[{country:"a",name:"am",birthday:"ruh"},{country:"aa",name:"asm",birthday:"ruhf"},{country:"asda",name:"aasdm",birthday:"rasuh"}]
                return directors;
            
            } catch (error) {
                throw new Error(error);  
            }
        
        }
      }
}
