import { DataTypes } from 'sequelize';

export const createClienteModel = (sequelize) => {
    const Cliente = sequelize.define('clientes', {
        cliente_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique: true
        },
        telefone: {
            type: DataTypes.STRING(15)
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false // Desabilitar createdAt e updatedAt
    });

    return Cliente;
};
