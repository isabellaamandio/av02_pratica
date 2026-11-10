import { knex } from "../database/knex.js";

class JogoRepository {
    async getAll(){
        const jogo = await knex('jogos').select("*").returning("*");
        return jogo;
    }async post(){
        const jogo = await knex('jogos').insert
    }
}

export const jogoRepository = new JogoRepository()