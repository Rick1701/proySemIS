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
        if(err){
            return res.status(400).send({message:"Error al crear el producto!!"})
        }
        return res.status(201).send(product)
    }) // LOS VALORES DEL PRODUCTO EN LA BASE DE DATOS
}

const getProducts = (req, res) => {
    Product.find({},(err,product) => {
        if(err){
            return res.status(400).send({message:"Error al obtener el producto!!"})
        }
        return res.status(200).send(product)
    })
}

//CONTROLADOR PARA OBTENER UN SOLO PRODUCTO COMM
const getSpecificProduct = (req,res) =>{
    //DE AQUI EXTRAIGO EL PARAMETRO QUE ENVIARÉ PARA LA RUTA (id)
    const {id} = req.params;
    /*console.log(id);*/
    Product.findById(id, (err, products) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener el producto!!"})
        }
        if(!products){
            return res.status(404).send({ message: "Producto no encontrado!!"})
        }
        //CONSIDERAR BUSQUEDA EN LA PLURALIDAD DE PRODUCTOS (productSSSSSSS)
        return res.status(200).send(products)
    })
}

//CONTROLADOR PARA ACTUALIZAR UN SOLO PRODUCTO COMM
const updateProduct = (req,res) =>{
     //DE AQUI EXTRAIGO EL PARAMETRO QUE ENVIARÉ PARA LA RUTA (id)
    const {id} = req.params;
    /*console.log(id);*/
    //findByIdAndUpdate BUSCA MEDIANTE (id) Y ACTUALIZA
    Product.findByIdAndUpdate (id, req.body, (err, products) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener el producto!!"})
        }
        if(!products){
            return res.status(404).send({ message: "Producto no encontrado!!"})
        }
        //CONSIDERAR BUSQUEDA EN LA PLURALIDAD DE PRODUCTOS (productSSSSSSS)
        return res.status(200).send(products)
    })
}

//CONTROLADOR PARA BORRAR UN SOLO PRODUCTO COMM
const deleteProduct = (req,res) =>{
    //DE AQUI EXTRAIGO EL PARAMETRO QUE ENVIARÉ PARA LA RUTA (id)
    const {id} = req.params;
    /*console.log(id);*/
    //findByIdAndDelete BUSCA MEDIANTE (id) Y BORRA
    Product.findByIdAndDelete (id, (err, products) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener el producto!!"})
        }
        if(!products){
            return res.status(404).send({ message: "Producto no encontrado!!"})
        }
        //CONSIDERAR BUSQUEDA EN LA PLURALIDAD DE PRODUCTOS (productSSSSSSS)
        return res.status(200).send(products)
    })
}

//PARA CREAR LA RUTA EXPORTO!!!
//ENTREGO UN OBJETO CON LOS CONTROLADORES
module.exports = {
    createProduct,
    getProducts,
    getSpecificProduct,
    updateProduct,
    deleteProduct
}

