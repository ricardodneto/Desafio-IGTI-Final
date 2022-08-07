import vendasRepository from "../repositores/vendas.repository.js"
import livroRepository from "../repositores/livros.repository.js"
import clienteRepository from "../repositores/clientes.repository.js"

async function saveVendas(venda){
    let Livro = await livroRepository.Getlivros(venda.livro_id);
    if (Livro.estoque > 0){
        venda.valor = Livro.valor;
        Livro.estoque = (Livro.estoque -1) 
        await livroRepository.updatelivros(Livro.dataValues);
        return await vendasRepository.insertVenda(venda);
    }
  throw new Error ("O estoque tem que ser > ou = 0");
   
}

async function updateVendas(venda){
    return await vendasRepository.updateVenda(venda);
}

async function getAllVendas(clienteId,livroId,autorId){
    if (clienteId){
        return await vendasRepository.getVendasByClienteId(clienteId);
    }
    if(livroId){
        return await vendasRepository.getVendasByLivroId(livroId);
    }
    if (autorId){
        return await vendasRepository.getVendasByautorId(autorId);
    }
    return await vendasRepository.GetsallVenda();

}


async function getVenda(id){
    return await vendasRepository.GetVenda(id);

}

async function deleteVenda(id){
    const livross = await livrossRepository.getlivrossById(id);
        if (livross){
            throw new Error ("não é possivel excluir um livros pois possui livros")
        }
    return await livrossRepository.Deletelivros(id);
}


export default {
    saveVendas,
    updateVendas,
    getAllVendas,
    getVenda,deleteVenda

}