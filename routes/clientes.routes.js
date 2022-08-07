import express from "express";
import clientesController from "../controllers/clientes.controller.js"
// Criando roteador
const router = express.Router();


router.post("/", clientesController.createCliente);
router.put("/", clientesController.updateCliente);
router.get("/", clientesController.getsAllCliente);
router.get("/:id", clientesController.getCliente);
router.delete("/:id",clientesController.deleteCliente);

export default router;
