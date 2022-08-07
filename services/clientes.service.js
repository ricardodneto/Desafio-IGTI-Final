import ClientesRepository from "../repositores/clientes.repository.js"
import VendasRepository from "../repositores/vendas.repository.js"
async function saveCliente(cliente){
    return await ClientesRepository.insertCliente(cliente);
}

async function updateCliente(cliente){
    return await ClientesRepository.updateCliente(cliente);
}

async function getAllCliente(cliente){
    return await ClientesRepository.GetsallCliente(cliente);

}

async function getCliente(id){
    return await ClientesRepository.GetCliente(id);

}

async function deleteCliente(id){
    const vendas = await VendasRepository.GetVenda(id);
        if (vendas){
            throw new Error ("não é possivel excluir um cliente pois possui venda")
        }
    return await ClientesRepository.DeleteCliente(id);
}

async function GetUsernameClient(username){
    return await ClientesRepository.GetUsernameClient(username);

}

async function GetPasswordClient(username,password){
    return await ClientesRepository.GetPasswordClient(username,password);

}

export default {
    saveCliente,
    updateCliente,
    getAllCliente,
    getCliente,
    deleteCliente,
    GetUsernameClient,
    GetPasswordClient


}