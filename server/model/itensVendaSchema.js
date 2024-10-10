import { DataTypes } from 'sequelize';

export const createItensVendaModel = (sequelize, Venda, Produto) => {
    const ItensVenda = sequelize.define('itensvenda', {
        item_venda_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        preco_unitario: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        }
    }, {
        timestamps: false // Desabilitar createdAt e updatedAt
    });

    ItensVenda.belongsTo(Venda, { foreignKey: 'venda_id', onDelete: 'CASCADE' });
    ItensVenda.belongsTo(Produto, { foreignKey: 'produto_id', onDelete: 'CASCADE' });

    return ItensVenda;
};
