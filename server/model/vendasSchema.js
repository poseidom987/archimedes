import { DataTypes } from 'sequelize';

export const createVendaModel = (sequelize, Cliente, Funcionario) => {
    const Venda = sequelize.define('vendas', {
        venda_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data_venda: {
            type: DataTypes.DATE,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        timestamps: false // Desabilitar createdAt e updatedAt
    });

    Venda.belongsTo(Cliente, { foreignKey: 'cliente_id', onDelete: 'SET NULL' });
    Venda.belongsTo(Funcionario, { foreignKey: 'funcionario_id', onDelete: 'SET NULL' });

    return Venda;
};
