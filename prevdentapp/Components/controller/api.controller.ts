import { RegistroInterface } from '../../model/registro.interface';
import { apiService, registroService } from '../services/api.service'; 

export const apiController = {
    async fetchAreasAtuacao() {
        try {
            const areas = await apiService.fetchAreasAtuacao();
            return areas;
        } catch (error) {
            console.error("[apiController - fetchAreasAtuacao()]Erro na controller ao buscar áreas de atuação:", error);
            throw error;
        }
    },

     async fetchMinhasConsultas(token: string) {
        try {
            const consultas = await apiService.fetchMinhasConsultas(token);
            return consultas;
        } catch (error) {
            console.error("[apiController - fetchMinhasConsultas()] Erro na controller ao buscar consultas:", error);
            throw error;
        }
    }
};

export const registroController ={

    async submitRegistry(data: RegistroInterface, token: string){
        try {
            const response = await registroService.submitRegistry(data, token);
            return response;
        } catch (error) {
            console.error("[registroController - submitRegistry()] Erro na controller ao enviar registro:", error);
            throw error;
        }
    },

    async fetchRegistro(token: string) {
        try {
            const registro = await registroService.fetchRegistro(token);
            return registro;
        } catch (error) {
            console.error("[registroController - fetchRegistro()] Erro na controller ao buscar registro:", error);
            throw error;
        }
    }
}