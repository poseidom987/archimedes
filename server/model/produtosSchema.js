import { DataTypes } from 'sequelize';

export const createProdutoModel = (sequelize) => {
    const Produto = sequelize.define('produtos', {
        produto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sabor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        quantidade_estoque: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false // Desabilitar createdAt e updatedAt
    });

    return Produto;
};
