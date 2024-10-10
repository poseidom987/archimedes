// Configuração do banco de dados
import { Sequelize } from 'sequelize';
import { createClienteModel } from '../model/clientesSchema.js';
import { createFuncionarioModel } from '../model/funcionariosSchema.js';
import { createProdutoModel } from '../model/produtosSchema.js';
import { createVendaModel } from '../model/vendasSchema.js';
import { createItensVendaModel } from '../model/itensVendaSchema.js';

const sequelize = new Sequelize('sorveteria', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false // Desativa o log
});

let ClienteModel = null;
let FuncionarioModel = null;
let ProdutoModel = null;
let VendaModel = null;
let ItensVendaModel = null;

const connection = async () => {
    try {
        await sequelize.authenticate();
        // Criação dos modelos sem alterar o banco
        ClienteModel = await createClienteModel(sequelize);
        FuncionarioModel = await createFuncionarioModel(sequelize);
        ProdutoModel = await createProdutoModel(sequelize);
        VendaModel = await createVendaModel(sequelize, ClienteModel, FuncionarioModel);
        ItensVendaModel = await createItensVendaModel(sequelize, VendaModel, ProdutoModel);

        // Sincronizar os modelos sem alterar o banco
        await sequelize.sync({ alter: false, force: false }); // Não altera o banco
        console.log('Database Synced');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export {
    connection,
    ClienteModel,
    FuncionarioModel,
    ProdutoModel,
    VendaModel,
    ItensVendaModel
}
