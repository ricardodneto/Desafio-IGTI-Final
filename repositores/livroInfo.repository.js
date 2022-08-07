import {getLivro} from "./mongo.db.js"

async function createLivroInfo(post){
    const livro = getLivro();
    try {
        await livro.connect();
        await livro.db("Livraria").collection("livroInfo").insertOne(post);
    }
    catch (err){
        throw err;
    }
    finally {
        await livro.close();
    }
}
async function UpdateLivroInfo(post){
    const livro =getLivro();
    try {
        await livro.connect();
        await livro.db("Livraria").collection("livroInfo").updateOne(
            {livroId: post.livroId}, 
            {$set: {...post}});
    }
    catch (err){
        throw err;
    }
    finally {
        await livro.close();
    }

}
async function deleteLivroInfo(livroId){
    const livro =getLivro();
    try {
        await livro.connect();
        await livro.db("Livraria").collection("livroInfo").deleteOne({livroId});
    }
    catch (err){
        throw err;
    }
    finally {
        await livro.close();
    }

}
async function getLivroInfo(livroId){
    const livro =getLivro();
    try {
        await livro.connect();
       return await livro.db("Livraria").collection("livroInfo").findOne({livroId});
    }
    catch (err){
        throw err;
    }
    finally {
        await livro.close();
    }

}

async function createAvaliacao(avaliacao, livroId){
    try {
        const livroInfo = await getLivroInfo(livroId);
        livroInfo.avaliacoes.push(avaliacao);
       return await UpdateLivroInfo(livroInfo);
    }
    catch (err){
        throw err;
    }
}

async function deleteAvaliacao(index, livroId){
    try {
        const livroInfo = await getLivroInfo(livroId);
        livroInfo.avaliacoes.splice(index,1);
       return await UpdateLivroInfo(livroInfo);
    }
    catch (err){
        throw err;
    }
}

export default {
    createLivroInfo,
    UpdateLivroInfo,
    deleteLivroInfo,
    getLivroInfo,
    createAvaliacao,
    deleteAvaliacao

}