import express from "express";
import autoresController from "../controllers/autores.controller.js"
// Criando roteador
const router = express.Router();


router.post("/", autoresController.createAutor);
router.put("/", autoresController.updateAutor);
router.get("/", autoresController.getsAllAutor);
router.get("/:id", autoresController.getAutor);
router.delete("/:id",autoresController.deleteAutor);

export default router;
