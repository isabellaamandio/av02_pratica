import { Router } from "express";
import { jogoController } from "../controllers/jogo.controller.js";

// jogoRouter.post("/", jogoController.post);
jogoRouter.get("/", jogoController.getAll);

export const jogoRouter = Router()
