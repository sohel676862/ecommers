
const router=require('express').Router();
const authControlar=require('../controllar/authControllers')
router.post('/admin-login',authControlar.admin_login);
module.exports=router;