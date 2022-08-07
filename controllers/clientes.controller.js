import clientesService from "../services/clientes.service.js"

// 1) Cadastrar um cliente:
// - Método HTTP e URL: POST - http://localhost:3000/cliente
// - Parâmetros: objeto JSON com o nome, e-mail, senha, telefone e endereço do cliente.

async function createCliente (req,res,next){
    try{
        let clienteInfo = req.body;
        if(!clienteInfo.nome ||!clienteInfo.email || !clienteInfo.senha || !clienteInfo.telefone || !clienteInfo.endereco){
            throw new Error ("nome , email , senha , telefone e endereco são obrigatórios")
        }
        res.send(await clientesService.saveCliente(clienteInfo));
        logger.info(`POST /post - ${JSON.stringify(clienteInfo)}`);

    }
    catch(err){
        next(err);
    }

}
// 2) Atualização de um cliente:
// - Método HTTP e URL: PUT - http://localhost:3000/cliente
// - Parâmetros: objeto JSON com o id do cliente que será atualizado, o nome, e-mail,
// senha, telefone e endereço que serão atualizados.
async function updateCliente(req,res,next){
    try{
         let clienteInfo = req.body;
         if (!clienteInfo.id || !clienteInfo.nome || !clienteInfo.email || !clienteInfo.senha || !clienteInfo.telefone || !clienteInfo.endereco ){
            throw new Error ("nome , email , senha , telefone e endereco são obrigatórios");
         }
         res.send(await clientesService.updateCliente(clienteInfo));
         
         logger.info(`PUT /proprietario - ${JSON.stringify(clienteInfo)}`);
     }
    catch (err){
        next(err);
    }
 
 }
//  3) Exclusão de um cliente (antes de excluir um cliente, verificar se existem vendas
//     cadastradas para ele. Caso exista, bloquear a exclusão)>
//     - Método HTTP e URL: DELETE - http://localhost:3000/cliente/{clienteId}
//     - Parâmetros: id do cliente passado diretamente na URL, exemplo de um id de valor 15
//     passado na URL: http://localhost:3000/cliente/15
async function deleteCliente(req,res,next){
    try{
      const deleteCliente =  await clientesService.deleteProprietario(req.params.id);
      res.send(deleteCliente);
        logger.info(`DELETE /cliente}`);
     }
    catch (err){
        next(err);
    }
 
 }

// 4) Consultar os clientes cadastrados (retornar todos os clientes, com todas as
//     informações exceto o campo de senha, que não deve ser retornado neste endpoint)>
//     - Método HTTP e URL: GET - http://localhost:3000/cliente
async function getsAllCliente(req,res,next){
    try{
        let todosClientes = []
        todosClientes = await clientesService.getAllCliente();
        res.send(todosClientes);
        logger.info(`GET /cliente}`);
     }
    catch (err){
        next(err);
    }
 
 }
//  5) Consultar um cliente em específico (pegar o id do cliente e retornar um objeto JSON
//     com suas informações, com todas as informações exceto o campo de senha, que não
//     deve ser retornado neste endpoint)>
//     - Método HTTP e URL: GET - http://localhost:3000/cliente/{clienteId}
//     - Parâmetros: id do cliente passado diretamente na URL, exemplo de um id de valor 15
//     passado na URL: http://localhost:3000/cliente/15
//     Endpoints do autor:
async function getCliente(req,res,next){
    try{
        let clienteFiltro = []
        let id = req.params.id;
        clienteFiltro= await clientesService.getCliente(id);
        delete clienteFiltro.dataValues.senha       
        res.send(clienteFiltro);
        logger.info(`GET /cliente}`);
     }
    catch (err){
        next(err);
    }
 
 } 

 async function GetUsernameClient(username){
    try{
   
        return await clientesService.GetUsernameClient(username); 
       
  
     }
    catch (err){
        next(err);
    }
 
 } 


export default {
    createCliente,
    updateCliente,
    getsAllCliente,
    getCliente,
    deleteCliente,GetUsernameClient

  
}