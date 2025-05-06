import { apiService } from '../services/api.service'; 

export const apiController = {
    async fetchAreasAtuacao() {
        try {
            const areas = await apiService.fetchAreasAtuacao();
            return areas;
        } catch (error) {
            console.error("Erro na controller ao buscar áreas de atuação:", error);
            throw error;
        }
    },

    async fetchConsultas() {
        try {
            const consultas = await apiService.fetchConsultas();
            return consultas;
        } catch (error) {
            console.error("Erro na controller ao buscar consultas:", error);
            throw error;
        }
    }
};