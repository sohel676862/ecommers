const adminModal=require('../models/adminModal')
const jwt=require('jsonwebtoken');
const crateToken=require('../utiles/tokencreate')
class authControlar{
    admin_login=async(req,res)=>{
    const {email,password}=req.body;
    // console.log(password)
    try {
        const admin =await adminModal.findOne({email});
        if(admin){
          
            if(admin.password ==password){
                // console.log(admin)
                const token=await crateToken({
                    id:admin.id,
                    role:admin.role
                })
                console.log(token)
            res.cookie('accessToken',token,{
                expires: new Date(Date.now()+7*24*60*60*1000)
            })
            res.status(200).json({token,messsage:"data process success"})
            }
            else{
                res.status(404).json({error:"invelide password"})
            }
        }
        else{
            res.status(504).json({error:"email dont match"})
        }
        
    } catch (error) {
        
        res.status(500).json({error:error.message})
    }
    }
}

module.exports =new authControlar();
// module.exports.admin_login=async(req,res)=>{
//     console.log(req.body);
    
// }