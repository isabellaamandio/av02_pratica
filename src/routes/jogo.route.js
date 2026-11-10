import { Router } from "express";
import { jogoController } from "../controllers/jogo.controller.js";

export const jogoRouter = Router()

jogoRouter.post("/", jogoController.create);
jogoRouter.get("/", jogoController.getAll);
// jogoRouter.get()


