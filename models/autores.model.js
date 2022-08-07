import Sequelize  from "sequelize";
import db from "../repositores/db.js";

const Autores = db.define('autores', {
    autor_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

export default Autores;