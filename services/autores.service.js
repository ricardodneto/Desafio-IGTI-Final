import AutoresRepository from "../repositores/autores.repository.js"
import LivrosRepository from "../repositores/livros.repository.js"

async function saveAutor(Autor){
    return await AutoresRepository.insertAutor(Autor);
}

async function updateAutor(Autor){
    return await AutoresRepository.updateAutor(Autor);
}

async function getAllAutor(Autor){
    return await AutoresRepository.GetsallAutor(Autor);

}

async function getAutor(id){
    return await AutoresRepository.GetAutor(id);

}
/*arrumar*/
async function deleteAutor(idAutor){
    const livros = await LivrosRepository.getAutorByAutorId(idAutor);
        if (livros.length > 0){
            throw new Error ("não é possivel excluir um autor que possui LIVRO cadastrado")
    
        }
        return await AutoresRepository.DeleteAutor(idAutor);
}


export default {
    saveAutor,
    updateAutor,
    getAllAutor,
    getAutor,deleteAutor

}