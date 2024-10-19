import express from "express";
import { 
    getAllClientes, addCliente, updateCliente, deleteCliente, getCliente,
    getAllFuncionarios, addFuncionario, updateFuncionario, deleteFuncionario, getFuncionario,
    getAllProdutos, addProduto, updateProduto, deleteProduto, getProduto,
    getAllVendas, addVenda, updateVenda, deleteVenda, getVenda,
    getAllItensVenda, addItensVenda, updateItensVenda, deleteItensVenda, getItensVenda, getTotalVendas, getTotalClientes
} from "../controller/userController.js"; // Altere o caminho para onde você definiu os controladores

const router = express.Router();

// Rotas para Cliente
router.get("/clientes/", getAllClientes);
router.get("/clientes/:id", getCliente);
router.get("/clientesTotal/", getTotalClientes);
router.post("/clientes/", addCliente);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);


// Rotas para Funcionario
router.get("/funcionarios/", getAllFuncionarios);
router.get("/funcionarios/:id", getFuncionario);
router.post("/funcionarios/", addFuncionario);
router.put("/funcionarios/:id", updateFuncionario);
router.delete("/funcionarios/:id", deleteFuncionario);

// Rotas para Produto
router.get("/produtos/", getAllProdutos);
router.get("/produtos/:id", getProduto);
router.post("/produtos/", addProduto);
router.put("/produtos/:id", updateProduto);
router.delete("/produtos/:id", deleteProduto);

// Rotas para Venda
router.get("/vendas/", getAllVendas);
router.get("/vendas/:id", getVenda);
router.get("/vendasTotal/", getTotalVendas);
router.post("/vendas/", addVenda);
router.put("/vendas/:id", updateVenda);
router.delete("/vendas/:id", deleteVenda);

// Rotas para ItensVenda
router.get("/itensVenda/", getAllItensVenda);
router.get("/itensVenda/:id", getItensVenda);
router.post("/itensVenda/", addItensVenda);
router.put("/itensVenda/:id", updateItensVenda);
router.delete("/itensVenda/:id", deleteItensVenda);

export default router;
