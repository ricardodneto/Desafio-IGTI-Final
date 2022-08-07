import autoresService from "../services/autores.service.js"
import LivrosService from "../services/livros.service.js"

async function createAutor (req,res,next){
    try{
        let autorInfo = req.body;
        if(!autorInfo.nome ||!autorInfo.email|| !autorInfo.telefone ){
            throw new Error ("nome , email  , telefone  são obrigatórios")
        }
        res.send(await autoresService.saveAutor(autorInfo));
        logger.info(`POST /post - ${JSON.stringify(autorInfo)}`);

    }
    catch(err){
        next(err);
    }

}

async function updateAutor(req,res,next){
    try{
         let autorInfo = req.body;
         if (!autorInfo.id || !autorInfo.nome || !autorInfo.email  || !autorInfo.telefone ){
            throw new Error ("nome , email  , telefone  são obrigatórios");
         }
         res.send(await clientesService.updateCliente(clienteInfo));
         
         logger.info(`PUT /proprietario - ${JSON.stringify(clienteInfo)}`);
     }
    catch (err){
        next(err);
    }
 
 }

//  (antes de excluir um autor, verificar se existem livros
//     cadastrados para ele. Caso exista, bloquear a exclusão):
    
async function deleteAutor(req,res,next){
    try{
      await autoresService.deleteAutor(req.params.id);
      res.end();
        logger.info(`DELETE /cliente}`);
     }
    catch (err){
        next(err);
    }
 
 }

async function getsAllAutor(req,res,next){
    try{
        let todosautores = []
        todosautores = await autoresService.getAllAutor();
        res.send(todosautores);
        logger.info(`GET /cliente}`);
     }
    catch (err){
        next(err);
    }
 
 }

async function getAutor(req,res,next){
    try{
        let autorFiltro = []
        let id = req.params.id;
        autorFiltro= await autoresService.getAutor(id);
        delete autorFiltro.dataValues.senha       
        res.send(autorFiltro);
        logger.info(`GET /cliente}`);
     }
    catch (err){
        next(err);
    }
 
 } 

export default {
    createAutor,
    updateAutor,
    getsAllAutor,
    getAutor,
    deleteAutor
  
}