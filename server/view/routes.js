import express from "express";
import { 
    getAllClientes, addCliente, updateCliente, deleteCliente, getCliente,
    getAllFuncionarios, addFuncionario, updateFuncionario, deleteFuncionario, getFuncionario,
    getAllProdutos, addProduto, updateProduto, deleteProduto, getProduto,
    getAllVendas, addVenda, updateVenda, deleteVenda, getVenda,
    getAllItensVenda, addItensVenda, updateItensVenda, deleteItensVenda, getItensVenda 
} from "../controller/userController.js"; // Altere o caminho para onde você definiu os controladores

const router = express.Router();

// Rotas para Cliente
router.get("/clientes/getAll", getAllClientes);
router.get("/clientes/get/:id", getCliente);
router.post("/clientes/add", addCliente);
router.put("/clientes/update/:id", updateCliente);
router.delete("/clientes/delete/:id", deleteCliente);

// Rotas para Funcionario
router.get("/funcionarios/getAll", getAllFuncionarios);
router.get("/funcionarios/get/:id", getFuncionario);
router.post("/funcionarios/add", addFuncionario);
router.put("/funcionarios/update/:id", updateFuncionario);
router.delete("/funcionarios/delete/:id", deleteFuncionario);

// Rotas para Produto
router.get("/produtos/getAll", getAllProdutos);
router.get("/produtos/get/:id", getProduto);
router.post("/produtos/add", addProduto);
router.put("/produtos/update/:id", updateProduto);
router.delete("/produtos/delete/:id", deleteProduto);

// Rotas para Venda
router.get("/vendas/getAll", getAllVendas);
router.get("/vendas/get/:id", getVenda);
router.post("/vendas/add", addVenda);
router.put("/vendas/update/:id", updateVenda);
router.delete("/vendas/delete/:id", deleteVenda);

// Rotas para ItensVenda
router.get("/itensVenda/getAll", getAllItensVenda);
router.get("/itensVenda/get/:id", getItensVenda);
router.post("/itensVenda/add", addItensVenda);
router.put("/itensVenda/update/:id", updateItensVenda);
router.delete("/itensVenda/delete/:id", deleteItensVenda);

export default router;
