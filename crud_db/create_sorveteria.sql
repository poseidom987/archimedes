CREATE TABLE Clientes (
    cliente_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100),
    endereco VARCHAR(255)
);

-- Tabela de Funcionários
CREATE TABLE Funcionarios (
    funcionario_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100),
    endereco VARCHAR(255),
    cargo VARCHAR(50),
    salario NUMERIC(10, 2) NOT NULL
);

-- Tabela de Produtos (Sorvetes)
CREATE TABLE Produtos (
    produto_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sabor VARCHAR(50),
    preco NUMERIC(5, 2) NOT NULL,
    quantidade_estoque INT NOT NULL
);

-- Tabela de Vendas
CREATE TABLE Vendas (
    venda_id SERIAL PRIMARY KEY,
    data_venda DATE NOT NULL,
    cliente_id INT REFERENCES Clientes(cliente_id) ON DELETE SET NULL,
    funcionario_id INT REFERENCES Funcionarios(funcionario_id) ON DELETE SET NULL,
    total NUMERIC(10, 2) NOT NULL
);

-- Tabela de Itens de Venda (relação entre Produtos e Vendas)
CREATE TABLE ItensVendas (
    item_venda_id SERIAL PRIMARY KEY,
    venda_id INT REFERENCES Vendas(venda_id) ON DELETE CASCADE,
    produto_id INT REFERENCES Produtos(produto_id) ON DELETE CASCADE,
    quantidade INT NOT NULL,
    preco_unitario NUMERIC(5, 2) NOT NULL
);