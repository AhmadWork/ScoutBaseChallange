const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../config')
module.exports=(context)=> {
    const authHeader=context.req.headers.authorization;
    if(authHeader){
        const token=authHeader.split('Bearer ')[1];
        if(token){
            
                const user = jwt.verify(token,SECRET_KEY)
                return user
            
        }else return null
       
    }else return null
    

}