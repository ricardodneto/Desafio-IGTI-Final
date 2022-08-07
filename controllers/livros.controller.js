import livrossService from "../services/livros.service.js"

// 1) Cadastrar um livros:
// - Método HTTP e URL: POST - http://localhost:3000/livros
// - Parâmetros: objeto JSON com o nome, e-mail, senha, telefone e endereço do livros.

async function createlivros (req,res,next){
    try{
        let livrosInfo = req.body;
        if(!livrosInfo.nome ||!livrosInfo.valor || !livrosInfo.autor_id  || !livrosInfo.estoque  ){
            throw new Error ("nome , email , senha , telefone e endereco são obrigatórios")
        }
        res.send(await livrossService.savelivros(livrosInfo));
        logger.info(`POST /post - ${JSON.stringify(livrosInfo)}`);

    }
    catch(err){
        next(err);
    }

}
// - Parâmetros: objeto JSON com o id do livro que será atualizado, o valor do livro que
// será atualizado. O endpoint não deve permitir que o nome e autor do livro sejam
// alterados, evitando assim possíveis inconsistências. 
async function updatelivros(req,res,next){
    try{
         let livrosInfo = req.body;

         if (!livrosInfo.livro_id ||!livrosInfo.valor){
            throw new Error ("id_livro e valor são obrigatórios");
         }
         let alteracao = await livrossService.updatelivros(livrosInfo);
         res.send(alteracao)
         
         logger.info(`PUT /proprietario - ${JSON.stringify(livrosInfo)}`);
     }
    catch (err){
        next(err);
    }
 
 }
//  3) Exclusão de um livro (antes de excluir um livro, verificar se existem vendas realizadas
//     para ele. Caso exista, bloquear a exclusão):
async function deletelivros(req,res,next){
    try{
      const deletelivros =  await livrossService.deletelivros(req.params.id);
      res.send(deletelivros);
        logger.info(`DELETE /livros}`);
     }
    catch (err){
        next(err);
    }
 
 }

// 4) Consultar os livross cadastrados (retornar todos os livross, com todas as
//     informações exceto o campo de senha, que não deve ser retornado neste endpoint)>
//     - Método HTTP e URL: GET - http://localhost:3000/livros
async function getsAlllivros(req,res,next){
    try{
        let todoslivross = []
        let idQuery = req.query.autorId;
        todoslivross = await livrossService.getAlllivros(idQuery);
        res.send(todoslivross);
        logger.info(`GET /livros}`);
     }
    catch (err){
        next(err);
    }
 
 }
//  5) Consultar um livros em específico (pegar o id do livros e retornar um objeto JSON
//     com suas informações, com todas as informações exceto o campo de senha, que não
//     deve ser retornado neste endpoint)>
//     - Método HTTP e URL: GET - http://localhost:3000/livros/{livrosId}
//     - Parâmetros: id do livros passado diretamente na URL, exemplo de um id de valor 15
//     passado na URL: http://localhost:3000/livros/15
//     Endpoints do autor:
async function getlivros(req,res,next){
    try{
        let id = req.params.id;
        let livrosFiltro= await livrossService.getlivros(id);
        res.send(livrosFiltro);
        logger.info(`GET /livros}`);
     }
    catch (err){
        next(err);
    }
 
 }
 async function createLivroInfo(req,res,next){
    try{
        let livroInfo = req.body;
        if(!livroInfo.livroId){
            throw new Error ("livro ID é obrigatório");
        }
        livroInfo = await livrossService.saveLivroInfo(livroInfo)
        res.end();
        logger.info(`POST /livros/info}${JSON.stringify(livroInfo)}`);
     }
    catch (err){
        next(err);
    }
 
 }
 async function updateLivroInfo(req,res,next){
    try{
        let livroInfo = req.body;
        if(!livroInfo.livroId){
            throw new Error ("livro ID é obrigatório");
        }
        livroInfo = await livrossService.updateLivroInfo(livroInfo)
        res.end();
        logger.info(`PUT /livros/info}${JSON.stringify(livroInfo)}`);
     }
    catch (err){
        next(err);
    }
 
 }

 async function deleteLivroInfo(req,res,next){
    try{
        let livroId = req.params.id;
        if(!livroId){
            throw new Error ("livro ID é obrigatório");
        }
        livroId = await livrossService.deleteLivroInfo(livroId)
        res.end();
        logger.info(`DELETE /livros/info}${JSON.stringify(livroId)}`);
     }
    catch (err){
        next(err);
    }
 
 }

 
 async function createAvaliacao(req,res,next){
    try{
        let livroId = req.params.id;
        let avaliacao = req.body;
        if(!livroId || !avaliacao){
            throw new Error ("livro ID e avaliacao é obrigatório");
        }
        livroId = await livrossService.createAvaliacao(avaliacao,livroId)
        res.send(livroId);
        logger.info(`POST /livros/info}${JSON.stringify(livroId)}`);
     }
    catch (err){
        next(err);
    }
 
 }
 
 async function deleteAvaliacao(req,res,next){
    try{
        let livroId = req.params.id;
        let index = req.params.index;
        if(!livroId || !index){
            throw new Error ("livro ID e index é obrigatório");
        }
        livroId = await livrossService.deleteAvaliacao(index,livroId)
        res.send(livroId);
        logger.info(`DELETE /livros/info}${JSON.stringify(livroId)}`);
     }
    catch (err){
        next(err);
    }
 
 }

 

export default {
    createlivros,
    updatelivros,
    getsAlllivros,
    getlivros,
    deletelivros,
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,
    createAvaliacao,
    deleteAvaliacao

  
}