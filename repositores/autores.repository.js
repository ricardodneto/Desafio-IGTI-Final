import Autor from "../models/autores.model.js";

async function insertAutor(autor){
    try{
       return await Autor.create(autor);
    }
    catch(err){
        throw err;
    }
}

async function updateAutor(autor){
    try{
        await Autor.update(Autor, {
         where: {
            Autor_id: autor.id
         }
        });
        return await getsAutor(autor.id);
     }
     catch(err){
         throw err;
     }
}


async function GetsallAutor(){
    try{
        return await Autor.findAll();
    } 
    catch(err){
        throw err;
    }
 

}
async function GetAutor(id){
    try{
        return await Autor.findByPk(id);
    } 
    catch(err){
        throw err;
    }
 

}
async function DeleteAutor(id){
    try{
        return await Autor.destroy({
            where: {
                autor_id: id
            } 
        });
    }
    catch(err){
        throw err;
    }

}


export default{
    insertAutor,
    updateAutor,
    GetsallAutor,
    GetAutor,
    DeleteAutor
}