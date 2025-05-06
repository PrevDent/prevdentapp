import axios from 'axios';
import { URL_PREVDENT_API } from '../../constants';

export const apiRepository = {
    getAreasAtuacao: async () => {
        try {
            const response = await axios.get(`${URL_PREVDENT_API}/areas-atuacao`);
            return response.data; 
        } catch (error) {
            console.error("Erro ao buscar áreas de atuação:", error);
            throw error; 
        }
    },

    getConsultas: async () => {
        try {
            const response = await axios.get(`${URL_PREVDENT_API}/consulta`);
            return response.data; 
        } catch (error) {
            console.error("Erro ao buscar consultas:", error);
            throw error; 
        }
    }
};