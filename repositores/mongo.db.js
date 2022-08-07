import mongodb from "mongodb";

function getLivro(){
    const uri = "mongodb+srv://ricardodneto:55884807@cluster0.obexu.mongodb.net/?retryWrites=true&w=majority"
    return new mongodb.MongoClient(uri); 
}

export {
    getLivro
}