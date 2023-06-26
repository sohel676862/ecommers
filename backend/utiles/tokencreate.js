const jwt=require('jsonwebtoken');
crateToken=async(data)=>{
 
    const token=await jwt.sign(data,'sohel',{
        expiresIn:'7d'
    });
    return token;
}

module.exports= crateToken;