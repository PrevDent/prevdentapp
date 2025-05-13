import { RegistroInterface } from '../../model/registro.interface';
import { apiRepository, registroRepository } from '../repository/api.repository'; 

export const apiService = {
    async fetchAreasAtuacao() {
        try {
            const areas = await apiRepository.getAreasAtuacao();
            return areas; 
        } catch (error) {
            console.error("[apiRepository - getAreasAtuacao()] Erro no serviço ao buscar áreas de atuação:", error);
            throw error; 
        }
    },

    async fetchMinhasConsultas(token: string) {
        try {
            const consultas = await apiRepository.getMinhasConsultas(token);
            return consultas; 
        } catch (error) {
            console.error("[apiRepository - getMinhasConsultas()] Erro no serviço ao buscar consultas:", error);
            throw error; 
        }
    },
};

export const registroService = {

    async submitRegistry(data: RegistroInterface, token: string) {
        try {
            const response = await registroRepository.postRegistro(data, token);
            return response; 
        } catch (error) {
            console.error("[registroService - submitRegistry()] Erro no serviço ao enviar registro:", error);
            throw error; 
        }
    },

    async fetchRegistro(token: string) {
        try {
            const registro = await registroRepository.getRegistro(token);
            return registro; 
        } catch (error) {
            console.error("[registroService - fetchRegistro()] Erro no serviço ao buscar registro:", error);
            throw error; 
        }
    },
}