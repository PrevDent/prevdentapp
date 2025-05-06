import { apiRepository } from '../repository/api.repository'; 

export const apiService = {
    async fetchAreasAtuacao() {
        try {
            const areas = await apiRepository.getAreasAtuacao();
            return areas; 
        } catch (error) {
            console.error("Erro no serviço ao buscar áreas de atuação:", error);
            throw error; 
        }
    },

    async fetchConsultas() {
        try {
            const consultas = await apiRepository.getConsultas();
            return consultas; 
        } catch (error) {
            console.error("Erro no serviço ao buscar consultas:", error);
            throw error; 
        }
    }
};