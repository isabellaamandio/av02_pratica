import { JogoService } from "../services/jogo.service.js"

class JogoController{
    async getAll(req,res){
        try{
            const jogo = await JogoService.getAll();
            res.json(jogo);
        } catch(error){}
    }

}
export const jogoController = new JogoController()