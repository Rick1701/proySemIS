const category = require('../models/category');
const Category = require('../models/category');

const createCategory = (req, res) => {
    const {name} = req.body
    const newCategory = new Category({
        name //recibe el atributo 'name'
    })

    //INGRESAN LOS PARAMETROS NUEVOS Y SE COMPARA CON ERROR, SI NO EXISTE ERROR SE GUARDA
    newCategory.save((err, category) =>{
        console.log('category', category)
        console.log('err', err)
        if(err){
            return res.status(400).send({message:"Error al crear la categoria!!"})
        }
        return res.status(201).send(category)
    }) // LOS VALORES DEL PRODUCTO EN LA BASE DE DATOS*/
}

const getCategories = (req, res) => {
    Category.find({},(err,category) => {
        if(err){
            return res.status(400).send({message:"Error al obtener la categoria!!"})
        }
        return res.status(200).send(category)
    })
}

const getSpecificCategory = (req,res) =>{
    const {id} = req.params;
    Category.findById(id, (err, category) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener la categoria!!"})
        }
        if(!category){
            return res.status(404).send({ message: "Categoria no encontrada!!"})
        }
        return res.status(200).send(category)
    })
}

const updateCategory = (req,res) =>{
    const {id} = req.params;
    Category.findByIdAndUpdate (id, req.body, (err, category) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener la categoria!!"})
        }
        if(!category){
            return res.status(404).send({ message: "Categoria no encontrada!!"})
        }
        return res.status(200).send(category)
    })
}

const deleteCategory = (req,res) =>{
    const {id} = req.params;
    Category.findByIdAndDelete (id, (err, category) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener la categoria!!"})
        }
        if(!category){
            return res.status(404).send({ message: "categoria no encontrada!!"})
        }
        return res.status(200).send(category)
    })
}


//PARA CREAR LA RUTA EXPORTO!!!
//ENTREGO UN OBJETO CON LOS CONTROLADORES
module.exports = {
    createCategory,
    getCategories,
    getSpecificCategory,
    updateCategory,
    deleteCategory
}
