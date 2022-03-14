const UserData = require('../models/signup');
const bcrypt = require('bcrypt');
const Signup = async (req,res)=>{
    const saltPassword =await bcrypt.genSalt(15);
    const bcryptPassword = await bcrypt.hash(req.body.password, saltPassword);
    const bcrypt_CPassword = await bcrypt.hash(req.body.c_password, saltPassword);
    const register = new UserData({
        username: req.body.username,
        email: req.body.email,
        number: req.body.number,
        gender: req.body.gender,
        country: req.body.country,
        password: bcryptPassword,
        c_password: bcrypt_CPassword
    })
    register.save().then((data)=>{
        res.json(data)
    }).catch((error)=>{   
        console.log(error);
    })
}

module.exports = Signup;