const productsfun = {};
const productDB = require('../models/product.model');


productsfun.saveData = async(req, res) => {
    const newProduct = new productDB(req.body);
    await newProduct.save();
    res.json({
        'state': true
    });
};

productsfun.updateData = async (req, res)=>{

    const product = {
        name: req.body.name,
        productId: req.body.productId,
        price: req.body.price,
        avaible: req.body.avaible,
        description: req.body.description
    };
    await productDB.findByIdAndUpdate(req.params.id, {$set: product}, {new: true}); //new concepto nuevo, si el dato no existe lo crea
    res.json({
        'state' : true
    });
};

productsfun.oneData = async (req, res) => {
    const product = await productDB.findById(req.params.id);
    res.json(product);
};

productsfun.deleteData = async (req, res) => {
    await productDB.findByIdAndRemove(req.params.id);
    res.json({
        'state' : true
    });
};

productsfun.all = async (req, res) => {
    const consults = await productDB.find();
    res.json(consults);
};

module.exports = productsfun;