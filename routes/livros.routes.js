import express, { application } from "express";
import livrosController from "../controllers/livros.controller.js"
import basicauth from "../repositores/basicauth.js";
// Criando roteador
//const basicAuth = "../repositores/basicauth.js"


const router = express.Router();



router.post("/", livrosController.createlivros);
router.put("/", livrosController.updatelivros);
router.get("/",basicauth.authorize('admin','usuario'),livrosController.getsAlllivros);
router.get("/:id",basicauth.authorize('admin','usuario'),livrosController.getlivros);
router.delete("/:id", livrosController.deletelivros);
router.post("/info", livrosController.createLivroInfo);
router.put("/info", livrosController.updateLivroInfo);
router.delete("/info/:id", livrosController.deleteLivroInfo);
router.post("/:id/avaliacao", livrosController.createAvaliacao);
router.delete("/:id/avaliacao/:index", livrosController.deleteAvaliacao);
export default router;
