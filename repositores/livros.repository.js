import Livros from "../models/livros.model.js";

async function insertlivros(livros){
    try{
       return await Livros.create(livros);
    }
    catch(err){
        throw err;
    }
}

async function updatelivros(livros){
    try{
        await Livros.update(livros, {
         where: {
            livro_id: livros.livro_id
         }
        });
        return await Getlivros(livros.livro_id);
     }
     catch(err){
         throw err;
     }
}


async function Getsalllivros(){
    try{
        return await Livros.findAll();
    } 
    catch(err){
        throw err;
    }
 

}
async function Getlivros(id){
    try{
        return await Livros.findByPk(id);
    } 
    catch(err){
        throw err;
    }
 

}
async function Deletelivros(id){
    try{
        return await Livros.destroy({
            where: {
                livros_id: id
            } 
        });
    }
    catch(err){
        throw err;
    }

}

async function getLivroByAutorId(autorid){
    try{
        return await Livros.findAll({
           where: {
            autor_id:autorid
           }
        })
    }
    catch(err){
        throw err;
    }

}

async function updateEstoqueLivro(livros){
    try{
        await Livros.update(livros, {
         where: {
            livros_id: livros.id_livro
         }
        });
        return await Getlivros(livros.id_livro);
     }
     catch(err){
         throw err;
     }
}


export default{
    insertlivros,
    updatelivros,
    Getsalllivros,
    Getlivros,
    Deletelivros,
    getLivroByAutorId
}