import Vendas from "../models/vendas.model.js";
import Livro from "../models/livros.model.js"

async function insertVenda(venda){
    try{
       return await Vendas.create(venda);
    }
    catch(err){
        throw err;
    }
}

async function updateVenda(venda){
    try{
        await Vendas.update(venda, {
         where: {
            vendas_id: venda.id
         }
        });
        return await getsVenda(venda.id);
     }
     catch(err){
         throw err;
     }
}


async function GetsallVenda(){
    try{
        return await Vendas.findAll();
    } 
    catch(err){
        throw err;
    }
 

}
async function GetVenda(id){
    try{
        return await Vendas.findByPk(id);
    } 
    catch(err){
        throw err;
    }
 

}
async function DeleteVenda(id){
    try{
        return await Vendas.destroy({
            where: {
                proprietario_id: id
            } 
        });
    }
    catch(err){
        throw err;
    }

}

async function getVendasByLivroId(livroId){
    try{
        return await Vendas.findAll({
           where: {
            livro_id:livroId
           }
        })
    }
    catch(err){
        throw err;
    }

}

async function getVendasByClienteId(clienteId){
    try{
        return await Vendas.findAll({
           where: {
            cliente_id:clienteId
           }
        })
    }
    catch(err){
        throw err;
    }

}
async function getVendasByautorId(autorId){
    try{
        return await Vendas.findAll({
            include: [
                {
                    model: Livro,
                    where: {
                    autor_id: autorId
                    }
                }
            ]
        })
    }
    catch(err){
        throw err;
    }

}



export default{
    insertVenda,
    updateVenda,
    GetsallVenda,
    GetVenda,
    DeleteVenda,
    getVendasByLivroId,
    getVendasByClienteId,
    getVendasByautorId
}