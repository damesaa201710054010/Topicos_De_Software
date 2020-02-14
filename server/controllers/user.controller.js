const usersfun = {};
const userDB = require('../models/user.model');


usersfun.saveData = async(req, res) => {
    const newuser = new userDB(req.body);
    await newuser.save();
    res.json({
        'state': true
    });
};

usersfun.updateData = async (req, res)=>{

    const user = {
        name: req.body.name,
        userId: req.body.userId,
        edad: req.body.edad,
        email: req.body.email
    };
    await userDB.findByIdAndUpdate(req.params.id, {$set: user}, {new: true}); //new: concepto nuevo, si el dato no existe lo crea
    res.json({
        'state' : true
    });
};

usersfun.oneData = async (req, res) => {
    const user = await userDB.findById(req.params.id);
    res.json(user);
};

usersfun.deleteData = async (req, res) => {
    await userDB.findByIdAndRemove(req.params.id);
    res.json({
        'state' : true
    });
};

usersfun.all = async (req, res) => {
    const consults = await userDB.find();
    res.json(consults);
};

module.exports = usersfun;