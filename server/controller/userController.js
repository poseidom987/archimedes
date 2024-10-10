import { ClienteModel, FuncionarioModel, ProdutoModel, VendaModel, ItensVendaModel } from "../postgres/postgres.js";

// GET All
export const getAllClientes = async (req, res) => {
    try {
        const clientes = await ClienteModel.findAll();
        if (clientes.length === 0) {
            return res.status(404).json({ "error": "Clientes not found." });
        }
        return res.status(200).json(clientes);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// GET Cliente by ID
export const getCliente = async (req, res) => {
    const id = req.params.id;
    try {
        const cliente = await ClienteModel.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente not found." });
        }
        return res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// POST Cliente
export const addCliente = async (req, res) => {
    try {
        const cliente = await ClienteModel.create(req.body);
        return res.status(201).json({ message: "Cliente added successfully.", cliente });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// PUT Cliente by ID
// PUT Cliente by ID
export const updateCliente = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ClienteModel.update(req.body, { where: { cliente_id: id } }); // Alterado de "id" para "cliente_id"
        if (result[0] === 0) {
            return res.status(404).json({ message: "Cliente not found." });
        }
        return res.status(200).json({ message: "Cliente updated successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};


// DELETE Cliente by ID
export const deleteCliente = async (req, res) => {
    const id = req.params.id;
    try {
        const cliente = await ClienteModel.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente not found." });
        }
        await cliente.destroy();
        return res.status(200).json({ message: "Cliente deleted successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// --- Repetindo para outras tabelas ---
export const getAllFuncionarios = async (req, res) => {
    try {
        const funcionarios = await FuncionarioModel.findAll();
        if (funcionarios.length === 0) {
            return res.status(404).json({ "error": "Funcionarios not found." });
        }
        return res.status(200).json(funcionarios);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

export const getFuncionario = async (req, res) => {
    const id = req.params.id;
    try {
        const funcionario = await FuncionarioModel.findByPk(id);
        if (!funcionario) {
            return res.status(404).json({ message: "Funcionario not found." });
        }
        return res.status(200).json(funcionario);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

export const addFuncionario = async (req, res) => {
    try {
        const funcionario = await FuncionarioModel.create(req.body);
        return res.status(201).json({ message: "Funcionario added successfully.", funcionario });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

export const updateFuncionario = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await FuncionarioModel.update(req.body, { where: { funcionario_id : id } });
        if (result[0] === 0) {
            return res.status(404).json({ message: "Funcionario not found." });
        }
        return res.status(200).json({ message: "Funcionario updated successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

export const deleteFuncionario = async (req, res) => {
    const id = req.params.id;
    try {
        const funcionario = await FuncionarioModel.findByPk(id);
        if (!funcionario) {
            return res.status(404).json({ message: "Funcionario not found." });
        }
        await funcionario.destroy();
        return res.status(200).json({ message: "Funcionario deleted successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};


// GET All Produtos
export const getAllProdutos = async (req, res) => {
    try {
        const produtos = await ProdutoModel.findAll();
        if (produtos.length === 0) {
            return res.status(404).json({ "error": "Produtos not found." });
        }
        return res.status(200).json(produtos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// GET Produto by ID
export const getProduto = async (req, res) => {
    const id = req.params.id;
    try {
        const produto = await ProdutoModel.findByPk(id);
        if (!produto) {
            return res.status(404).json({ message: "Produto not found." });
        }
        return res.status(200).json(produto);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// POST Produto
export const addProduto = async (req, res) => {
    try {
        const produto = await ProdutoModel.create(req.body);
        return res.status(201).json({ message: "Produto added successfully.", produto });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// PUT Produto by ID
export const updateProduto = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ProdutoModel.update(req.body, { where: { produto_id: id } });
        if (result[0] === 0) {
            return res.status(404).json({ message: "Produto not found." });
        }
        return res.status(200).json({ message: "Produto updated successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// DELETE Produto by ID
export const deleteProduto = async (req, res) => {
    const id = req.params.id;
    try {
        const produto = await ProdutoModel.findByPk(id);
        if (!produto) {
            return res.status(404).json({ message: "Produto not found." });
        }
        await produto.destroy();
        return res.status(200).json({ message: "Produto deleted successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};


// GET All Vendas
export const getAllVendas = async (req, res) => {
    try {
        const vendas = await VendaModel.findAll();
        if (vendas.length === 0) {
            return res.status(404).json({ "error": "Vendas not found." });
        }
        return res.status(200).json(vendas);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// GET Venda by ID
export const getVenda = async (req, res) => {
    const id = req.params.id;
    try {
        const venda = await VendaModel.findByPk(id);
        if (!venda) {
            return res.status(404).json({ message: "Venda not found." });
        }
        return res.status(200).json(venda);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// POST Venda
export const addVenda = async (req, res) => {
    try {
        const venda = await VendaModel.create(req.body);
        return res.status(201).json({ message: "Venda added successfully.", venda });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// PUT Venda by ID
export const updateVenda = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await VendaModel.update(req.body, { where: { venda_id: id } });
        if (result[0] === 0) {
            return res.status(404).json({ message: "Venda not found." });
        }
        return res.status(200).json({ message: "Venda updated successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// DELETE Venda by ID
export const deleteVenda = async (req, res) => {
    const id = req.params.id;
    try {
        const venda = await VendaModel.findByPk(id);
        if (!venda) {
            return res.status(404).json({ message: "Venda not found." });
        }
        await venda.destroy();
        return res.status(200).json({ message: "Venda deleted successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};


// GET All ItensVenda
export const getAllItensVenda = async (req, res) => {
    try {
        const itensVenda = await ItensVendaModel.findAll();
        if (itensVenda.length === 0) {
            return res.status(404).json({ "error": "ItensVenda not found." });
        }
        return res.status(200).json(itensVenda);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// GET ItensVenda by ID
export const getItensVenda = async (req, res) => {
    const id = req.params.id;
    try {
        const itensVenda = await ItensVendaModel.findByPk(id);
        if (!itensVenda) {
            return res.status(404).json({ message: "ItensVenda not found." });
        }
        return res.status(200).json(itensVenda);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// POST ItensVenda
export const addItensVenda = async (req, res) => {
    try {
        const itensVenda = await ItensVendaModel.create(req.body);
        return res.status(201).json({ message: "ItensVenda added successfully.", itensVenda });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// PUT ItensVenda by ID
export const updateItensVenda = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ItensVendaModel.update(req.body, { where: { item_venda_id: id } });
        if (result[0] === 0) {
            return res.status(404).json({ message: "ItensVenda not found." });
        }
        return res.status(200).json({ message: "ItensVenda updated successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};

// DELETE ItensVenda by ID
export const deleteItensVenda = async (req, res) => {
    const id = req.params.id;
    try {
        const itensVenda = await ItensVendaModel.findByPk(id);
        if (!itensVenda) {
            return res.status(404).json({ message: "ItensVenda not found." });
        }
        await itensVenda.destroy();
        return res.status(200).json({ message: "ItensVenda deleted successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error." });
    }
};


// Similar blocks for Produto, Venda, and ItensVenda follow the same pattern.

