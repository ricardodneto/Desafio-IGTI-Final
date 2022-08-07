import Sequelize  from "sequelize";
import db from "../repositores/db.js";
import Livros from "./livros.model.js";
import Clientes from "./clientes.model.js";

const Vendas = db.define('vendas', {
    venda_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    cliente_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    livro_id: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

Vendas.belongsTo(Livros,{foreignKey: "livro_id"})
Vendas.belongsTo(Clientes,{foreignKey: "cliente_id"})

export default Vendas;