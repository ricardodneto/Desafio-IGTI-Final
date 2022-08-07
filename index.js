import express from "express";
import cors from "cors";
// Importar lib de LOG
import winston from"winston";
import clienteRouter from "./routes/clientes.routes.js";
import livrosRouter from "./routes/livros.routes.js";
import autoresRouter from "./routes/autores.routes.js";
import vendasRouter from "./routes/vendas.routes.js";


const port = process.env.PORT || 3000

/*Configuração do LOG */
const {combine, timestamp, label,printf}= winston.format;
const myFormat = printf(({level,message,label,timestamp})=> {
    return `${timestamp}[${label}]${level}${message}`;
});


global.logger = winston.createLogger ({
    level:"silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "livraria-api.log"})
    ],
    format: combine(
        label({label: "livraria-api"}),
        timestamp(),
        myFormat
    )
});


const app = express();
app.use(express.json());




// function getRole(username){
//     if(username == 'admin'){
//         return 'admin'
//     }
//     else {
//         return 'usuario'
//     }
// }

// app.use(expressBasicAuth(
//     {authorizer:myAuthorizer,
//     authorizeAsync:true}
//     ))


    
// function authorize(...allowed){

//     const isAllowed = role => allowed.indexOf(role)> -1;
//     return (req,res, next) =>{
//         if (req.auth.user){
//             const role = getRole(req.auth.user);
//             if (isAllowed(role)){
//                 next();
//             }
//             else {
//                 res.status(401).send('role not allowed');
//             }
//         }    
//         else {
//             res.status(403).send('user not found');
//         }
//     }

// }

// async function myAuthorizer(username, password, cb) {
//     if(username == 'admin'){
//         const userMatches = expressBasicAuth.safeCompare(username, 'admin')
//         const passwordMatches = expressBasicAuth.safeCompare(password, 'admin')
//         if(!userMatches || !passwordMatches){
//             return cb(null,false)
//         }
//         return cb(null,true)
//     }
//     const getUsername = await getUsernameClient(username)
//     const getPassword = await getPasswordClient(username,password)
//     if (!getUsername || !getPassword ){
//         return cb(null,false)
//     }

//     return cb(null,true)

//     }



// async function getUsernameClient(username){
//   return  await clientesController.GetUsernameClient(username);
// }

// async function getPasswordClient (username,password){
//     return  await clientesService.GetPasswordClient(username,password);
//   }





app.use("/cliente",clienteRouter);
app.use("/livros",livrosRouter);
app.use("/autores",autoresRouter);
app.use("/vendas",vendasRouter);




app.listen(port, () => console.log("API started!"));