import VendasService from "../services/vendas.service.js"

// 1) Cadastrar um Venda:
// - Método HTTP e URL: POST - http://localhost:3000/Venda
// - Parâmetros: objeto JSON com o nome, e-mail, senha, telefone e endereço do Venda.

async function createVenda (req,res,next){
    try{
        let vendaInfo = req.body;
        if(!vendaInfo.data ||!vendaInfo.cliente_id || !vendaInfo.livro_id ){
            throw new Error ("data , client_id , livro_id são obrigatórios")
        }
        res.send(await VendasService.saveVendas(vendaInfo));
        logger.info(`POST /post - ${JSON.stringify(vendaInfo)}`);

    }
    catch(err){
        next(err);
    }

}
// 2) Atualização de um Venda:
// - Método HTTP e URL: PUT - http://localhost:3000/Venda
// - Parâmetros: objeto JSON com o id do Venda que será atualizado, o nome, e-mail,
// senha, telefone e endereço que serão atualizados.
async function updateVenda(req,res,next){
    try{
         let VendaInfo = req.body;
         if (!VendaInfo.id || !VendaInfo.nome || !VendaInfo.email || !VendaInfo.senha || !VendaInfo.telefone || !VendaInfo.endereco ){
            throw new Error ("nome , email , senha , telefone e endereco são obrigatórios");
         }
         res.send(await VendasService.updateVenda(VendaInfo));
         
         logger.info(`PUT /proprietario - ${JSON.stringify(VendaInfo)}`);
     }
    catch (err){
        next(err);
    }
 
 }
//  3) Exclusão de um Venda (antes de excluir um Venda, verificar se existem vendas
//     cadastradas para ele. Caso exista, bloquear a exclusão)>
//     - Método HTTP e URL: DELETE - http://localhost:3000/Venda/{VendaId}
//     - Parâmetros: id do Venda passado diretamente na URL, exemplo de um id de valor 15
//     passado na URL: http://localhost:3000/Venda/15
async function deleteVenda(req,res,next){
    try{
      const deleteVenda =  await VendasService.deleteProprietario(req.params.id);
      res.send(deleteVenda);
        logger.info(`DELETE /Venda}`);
     }
    catch (err){
        next(err);
    }
 
 }

// 4) Consultar os Vendas cadastrados (retornar todos os Vendas, com todas as
//     informações exceto o campo de senha, que não deve ser retornado neste endpoint)>
//     - Método HTTP e URL: GET - http://localhost:3000/Venda
async function getsAllVenda(req,res,next){
    try{
        let clienteId = req.query.clienteId;
        let livroId = req.query.livroId;
        let autorId = req.query.autorId;
        const todasVendas = await VendasService.getAllVendas(clienteId,livroId,autorId);
        res.send(todasVendas);
        logger.info(`GET /Venda}`);
     }
    catch (err){
        next(err);
    }
 
 }

//  async function getsAlllivros(req,res,next){
//     try{
//         let todoslivross = []
//         let idQuery = req.query.autorId;
//         todoslivross = await livrossService.getAlllivros(idQuery);
//         res.send(todoslivross);
//         logger.info(`GET /livros}`);
//      }
//     catch (err){
//         next(err);
//     }
 
//  }
//  5) Consultar um Venda em específico (pegar o id do Venda e retornar um objeto JSON
//     com suas informações, com todas as informações exceto o campo de senha, que não
//     deve ser retornado neste endpoint)>
//     - Método HTTP e URL: GET - http://localhost:3000/Venda/{VendaId}
//     - Parâmetros: id do Venda passado diretamente na URL, exemplo de um id de valor 15
//     passado na URL: http://localhost:3000/Venda/15
//     Endpoints do autor:
async function getVenda(req,res,next){
    try{
        let VendaFiltro = []
        let id = req.params.id;
        VendaFiltro= await VendasService.getVenda(id);     
        res.send(VendaFiltro);
        logger.info(`GET /Venda}`);
     }
    catch (err){
        next(err);
    }
 
 } 

export default {
    createVenda,
    updateVenda,
    getsAllVenda,
    getVenda,
    deleteVenda
  
}