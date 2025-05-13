import axios from 'axios';
import { URL_PREVDENT_API, URL_PREVDENT_LOCAL_JAVA_API } from '../../constants';
import { RegistroInterface } from '../../model/registro.interface';

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

    getMinhasConsultas: async (token: string) => {
        try{
            const response = await axios.get(`${URL_PREVDENT_LOCAL_JAVA_API}/consulta/minhas`, {
                headers: {
                    'Authorization': token
                }
            });
            return response.data;
        }catch(error){
            console.error("[apiRepository - getMinhasConsultas()] Erro ao buscar as consultas do usuário", error);
            throw error;
        }
    }
};

export const registroRepository = {
    postRegistro: async (data: RegistroInterface, token: string) => {
        try {
            const response = await axios.post(`${URL_PREVDENT_LOCAL_JAVA_API}/novos-registros/cadastrar`, data, {
                headers: {
                    'Authorization': token
                }
            });
            return response.data;
        } catch (error) {
            console.error("[registroRepository - postRegistro()] Erro ao enviar o registro do usuário", error);
            throw error;
        }
    },

    getRegistro: async (token: string) => {
        try{
            const response = await axios.get(`${URL_PREVDENT_LOCAL_JAVA_API}/novos-registros`, {
                headers: {
                    'Authorization': token
                }
            });
            return response.data;
        }catch(error){
            console.error("[registroRepository - getRegistro()] Erro ao buscar o registro do usuário", error);
            throw error;
        }
    }
}