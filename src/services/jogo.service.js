import { JogoRepository } from "../repositories/jogo.repository.js"

class JogoService{
    async getAll(){
        const jogo = await JogoRepository.getAll();
        return jogo;
    }async post(){
        const jogo = await JogoRepository.create();
        return jogo;
    }
}
export const jogoService = new JogoService ()