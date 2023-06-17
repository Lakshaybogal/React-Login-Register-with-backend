const User = require('../module/user');

 const addUser = (async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password })
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
})

const checkUser = ( async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(200).json(user);
            if(user.password === password){
               return res.status(200).json(user);
            }
        }
        return res.status(404).json({
            error: "User Not Found"
        })
        
    }
    catch (error){
       return res.status(404).json({
            "error": "not Found"
        })
    }
    
})

module.exports = {addUser,checkUser}