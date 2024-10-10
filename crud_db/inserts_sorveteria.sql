INSERT INTO Clientes (nome, cpf, telefone, email, endereco)
VALUES 
('Rafael Marcon', '12345678901', '123456789', 'rafael@email.com', 'Rua A, 123'),
('Joana Pereira', '23456789012', '234567890', 'joana@email.com', 'Rua B, 234'),
('Carlos Silva', '34567890123', '345678901', 'carlos@email.com', 'Rua C, 345'),
('Ana Souza', '45678901234', '456789012', 'ana@email.com', 'Rua D, 456'),
('Bruno Oliveira', '56789012345', '567890123', 'bruno@email.com', 'Rua E, 567'),
('Fernanda Lima', '67890123456', '678901234', 'fernanda@email.com', 'Rua F, 678'),
('Lucas Almeida', '78901234567', '789012345', 'lucas@email.com', 'Rua G, 789'),
('Mariana Santos', '89012345678', '890123456', 'mariana@email.com', 'Rua H, 890'),
('Pedro Costa', '90123456789', '901234567', 'pedro@email.com', 'Rua I, 901'),
('Gabriela Ferreira', '01234567890', '012345678', 'gabriela@email.com', 'Rua J, 012');


INSERT INTO Funcionarios (nome, cpf, telefone, email, endereco, cargo, salario)
VALUES 
('João Silva', '09876543210', '987654321', 'joao@email.com', 'Rua K, 101', 'Atendente', 1500.00),
('Paula Santos', '12312312312', '123123123', 'paula@email.com', 'Rua L, 102', 'Gerente', 3500.00),
('Roberto Lima', '23423423423', '234234234', 'roberto@email.com', 'Rua M, 103', 'Caixa', 1800.00),
('Carla Martins', '34534534534', '345345345', 'carla@email.com', 'Rua N, 104', 'Atendente', 1500.00),
('Bruno Oliveira', '45645645645', '456456456', 'bruno@email.com', 'Rua O, 105', 'Caixa', 1800.00),
('Luana Souza', '56756756756', '567567567', 'luana@email.com', 'Rua P, 106', 'Atendente', 1500.00),
('Marcos Dias', '67867867867', '678678678', 'marcos@email.com', 'Rua Q, 107', 'Gerente', 3500.00),
('Tatiana Costa', '78978978978', '789789789', 'tatiana@email.com', 'Rua R, 108', 'Atendente', 1500.00),
('Lucas Almeida', '89089089089', '890890890', 'lucas@email.com', 'Rua S, 109', 'Caixa', 1800.00),
('Isabela Rocha', '90190190190', '901901901', 'isabela@email.com', 'Rua T, 110', 'Gerente', 3500.00);


INSERT INTO Produtos (nome, sabor, preco, quantidade_estoque)
VALUES 
('Sorvete de Chocolate', 'Chocolate', 5.50, 100),
('Sorvete de Morango', 'Morango', 6.00, 80),
('Sorvete de Baunilha', 'Baunilha', 5.00, 90),
('Sorvete de Limão', 'Limão', 4.50, 50),
('Sorvete de Coco', 'Coco', 5.75, 70),
('Sorvete de Flocos', 'Flocos', 6.25, 65),
('Sorvete de Pistache', 'Pistache', 7.00, 40),
('Sorvete de Menta', 'Menta', 5.80, 75),
('Sorvete de Doce de Leite', 'Doce de Leite', 6.50, 85),
('Sorvete de Uva', 'Uva', 5.40, 60);


INSERT INTO Vendas (data_venda, cliente_id, funcionario_id, total)
VALUES 
('2024-10-01', 1, 1, 16.50),
('2024-10-02', 2, 2, 12.00),
('2024-10-03', 3, 3, 9.50),
('2024-10-04', 4, 4, 18.75),
('2024-10-05', 5, 5, 11.00),
('2024-10-06', 6, 6, 13.50),
('2024-10-07', 7, 7, 15.00),
('2024-10-08', 8, 8, 19.75),
('2024-10-09', 9, 9, 14.50),
('2024-10-10', 10, 10, 17.25);


INSERT INTO ItensVendas (venda_id, produto_id, quantidade, preco_unitario)
VALUES 
(1, 1, 2, 5.50),
(1, 2, 1, 6.00),
(2, 3, 2, 5.00),
(2, 4, 1, 4.50),
(3, 5, 2, 5.75),
(3, 6, 1, 6.25),
(4, 7, 3, 7.00),
(4, 8, 1, 5.80),
(5, 9, 1, 6.50),
(5, 10, 2, 5.40),
(6, 1, 1, 5.50),
(6, 3, 1, 5.00),
(7, 2, 2, 6.00),
(7, 4, 1, 4.50),
(8, 5, 2, 5.75),
(8, 6, 1, 6.25),
(9, 7, 3, 7.00),
(9, 9, 1, 6.50),
(10, 10, 2, 5.40),
(10, 8, 1, 5.80);
