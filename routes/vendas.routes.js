import express from "express";
import vendasController from "../controllers/vendas.controller.js"
import basicauth from "../repositores/basicauth.js";
// Criando roteador
const router = express.Router();


router.post("/",basicauth.authorize('admin','usuario'), vendasController.createVenda);
router.put("/", vendasController.updateVenda);
router.get("/", basicauth.authorize('admin','usuario'),vendasController.getsAllVenda);
router.get("/:id",basicauth.authorize('admin','usuario'), vendasController.getVenda);
router.delete("/:id",vendasController.deleteVenda);

export default router;
