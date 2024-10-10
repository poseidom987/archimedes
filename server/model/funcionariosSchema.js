import { DataTypes } from 'sequelize';

export const createFuncionarioModel = (sequelize) => {
    const Funcionario = sequelize.define('funcionarios', {
        funcionario_id: {
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
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        timestamps: false // Desabilitar createdAt e updatedAt
    });

    return Funcionario;
};
