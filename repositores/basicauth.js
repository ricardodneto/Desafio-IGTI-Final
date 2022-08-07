import clientesController from "../controllers/clientes.controller.js";
import clientesService from "../services/clientes.service.js";
import expressBasicAuth from 'express-basic-auth'



// function authorize(req,res,next)  {
//   try {
//     let teste = req;
//     console.log(teste);
//     next();

//   } catch {
//     res.status(401).json({
//       error: new Error('Invalid request!')
//     });
//   }
// };





const authOptions = {
    challenge: true, //it will cause most browsers to show a popup to enter credentials on unauthorized responses,
    authorizeAsync: true,
    authorizer: myAsyncAuthorizer
};

function authorize(...allowed) {

    const isAllowed = role => allowed.indexOf(role) > -1;
    return (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(403).send('user not found');
        }
        const base64Credentials = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        let lenghtCredential = credentials.length;
        let indexSeparator = credentials.indexOf(":");
        let username = credentials.substring(0, indexSeparator);
        let password = credentials.substring(indexSeparator + 1, lenghtCredential);
        let perfil = getRole(username);
        if (perfil) {
            const role = perfil;
            if (isAllowed(role)) {
                const validator = myAsyncAuthorizer(username, password).then(validator => {
                    next();
                }).catch(erro => {
                    res.status(401).send('user or password is not valid');
                })
            }
            else {
                res.status(401).send('role not allowed');
            }
        }
        else {
            res.status(403).send('user not found');
        }
    }

}


async function myAsyncAuthorizer(username, password, cb) {
    if (username == 'admin') {
        const userMatches = expressBasicAuth.safeCompare(username, 'admin');
        const passwordMatches = expressBasicAuth.safeCompare(password, 'desafio-igti-nodejs');
        if (!userMatches || !passwordMatches) {
            return false
        }
        return true;
    }
    const getUsername = await getUsernameClient(username)
    const getPassword = await getPasswordClient(username, password)
    if (!getUsername || !getPassword) {
        res.status(401).send('user or password is not valid');
    }

    return true;
}


async function getUsernameClient(username) {
    return await clientesController.GetUsernameClient(username);
}

async function getPasswordClient(username, password) {
    return await clientesService.GetPasswordClient(username, password);
}

function getRole(username) {
    if (username == 'admin') {
        return 'admin'
    }
    else {
        return 'usuario'
    }
}


export default {
    authorize
}