import Cliente from "../models/clientes.model.js";

async function insertCliente(cliente){
    try{
       return await Cliente.create(cliente);
    }
    catch(err){
        throw err;
    }
}

async function updateCliente(cliente){
    try{
        await Cliente.update(cliente, {
         where: {
            cliente_id: cliente.id
         }
        });
        return await getsCliente(cliente.id);
     }
     catch(err){
         throw err;
     }
}


async function GetsallCliente(){
    try{
        return await Cliente.findAll();
    } 
    catch(err){
        throw err;
    }
 

}
async function GetCliente(id){
    try{
        return await Cliente.findByPk(id);
    } 
    catch(err){
        throw err;
    }
 

}
async function DeleteCliente(id){
    try{
        return await Proprietario.destroy({
            where: {
                proprietario_id: id
            } 
        });
    }
    catch(err){
        throw err;
    }

}

async function GetUsernameClient(username){
    try{
        return await Cliente.findOne({
        where: {
                email:username
                }
            })
        }
    catch(err){
        throw err;
    }

}
async function GetPasswordClient(user,password){
    try{
        return await Cliente.findOne({
        where: {
                senha:password,
                email:user
                }
            })
        }
    catch(err){
        throw err;
    }

}

export default{
    insertCliente,
    updateCliente,
    GetsallCliente,
    GetCliente,
    DeleteCliente,
    GetUsernameClient,
    GetPasswordClient
}