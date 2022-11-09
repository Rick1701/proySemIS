const Product = require('../models/product');

const createProduct = (req, res) => {
    const {name,price,quantity,description} = req.body;
    const newProduct = new Product({
        name,
        price,
        quantity,
        description
    });

    //INGRESAN LOS PARAMETROS NUEVOS Y SE COMPARA CON ERROR, SI NO EXISTE ERROR SE GUARDA
    newProduct.save((err, product) =>{
        if(err)
        {
            return res.status(400).send({message:"Error al crear el producto!!"})
        }
        return res.status(201).send(product)
    }) // LOS VALORES DEL PRODUCTO EN LA BASE DE DATOS
}

const getProducts = (req, res) => {
    Product.find({},(err,product) => {
        if(err)
        {
            return res.status(400).send({message:"Error al obtener el producto!!"})
        }
        return res.status(200).send(product)
    })
}

//PARA CREAR LA RUTA EXPORTO!!!
//ENTREGO UN OBJETO CON LAS FUNCIONES
module.exports = {
    createProduct,
    getProducts
}

