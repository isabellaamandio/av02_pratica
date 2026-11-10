import { JogoRepository } from "../repositories/jogo.repository.js"
class JogoService{
    async getAll(){
        const jogo = await JogoRepository.getAll();
    }
}
export const jogoService = new JogoService ()