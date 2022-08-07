import livrossRepository from "../repositores/livros.repository.js"
import vendasRepository from "../repositores/vendas.repository.js"
import livroInfoRepository from "../repositores/livroInfo.repository.js"

async function savelivros(livros){
    return await livrossRepository.insertlivros(livros);
}

async function updatelivros(livros){
    return await livrossRepository.updatelivros(livros);
}

async function getAlllivros(autorId){
    if (autorId){
    return await livrossRepository.getLivroByAutorId(autorId);
    }
    return await livrossRepository.Getsalllivros();

}

async function getlivros(idLivro,idAutor){
    if(idLivro){
        return await livrossRepository.Getlivros(idLivro);
    }
    return await livrossRepository.getLivroByAutorId(idAutor);

}
// ) Exclusão de um livro (antes de excluir um livro, verificar se existem vendas realizadas
//     para ele. Caso exista, bloquear a exclusão):
async function deletelivros(id){
    const vendas = await vendasRepository.getVendasByLivroId(id);
        if (vendas.length > 0){
            return await livrossRepository.Deletelivros(id);
        }
        throw new Error ("não é possivel excluir um livro pois possui vendas")
}

/*Salvar LivroInfo -> MongoDB */
async function saveLivroInfo(livroInfo){
    await livroInfoRepository.createLivroInfo(livroInfo);
}

async function updateLivroInfo(livroInfo){
    await livroInfoRepository.UpdateLivroInfo(livroInfo);
}
async function deleteLivroInfo(livroInfo){
    await livroInfoRepository.deleteLivroInfo(livroInfo);
}
async function createAvaliacao(avaliacao,livroId){
    await livroInfoRepository.createAvaliacao(avaliacao,livroId);
}
async function deleteAvaliacao(index,livroId){
    await livroInfoRepository.deleteAvaliacao(index,livroId);
}

export default {
    savelivros,
    updatelivros,
    getAlllivros,
    getlivros,
    deletelivros,
    saveLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,
    createAvaliacao,
    deleteAvaliacao

}