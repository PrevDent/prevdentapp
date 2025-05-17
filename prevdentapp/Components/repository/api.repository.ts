import axios from 'axios';
import { URL_PREVDENT_JAVA_API } from '../../constants';
import { RegistroInterface } from '../../model/registro.interface';
import { ScheduleAppointmentInterface } from '../../model/appointment.interface';
import areasData from '../data/areas-atuacao.json';

export const apiRepository = {

    getMinhasConsultas: async (token: string) => {
        try{
            const response = await axios.get(`${URL_PREVDENT_JAVA_API}/consulta/minhas`, {
                headers: {
                    'Authorization': token
                }
            });
            return response.data;
        }catch(error){
            console.error("[apiRepository - getMinhasConsultas()] Erro ao buscar as consultas do usuário", error);
            throw error;
        }
    },

    postAppointmment: async (data: ScheduleAppointmentInterface, token: string) => {
        try {
            const response = await axios.post(`${URL_PREVDENT_JAVA_API}/consulta/cadastrar`, data, {
                headers: {
                    'Authorization': token
                }
            });
            console.log("[apiRepository - postAppointmment()] Consulta agendada com sucesso:", response.data);
            return response.data;
        } catch (error) {
            console.error("[apiRepository - postAppointmment()] Erro ao agendar consulta do usuário", error);
            throw error;
        }
    },
};

export const registroRepository = {
    postRegistro: async (data: RegistroInterface, token: string) => {
        try {
            const response = await axios.post(`${URL_PREVDENT_JAVA_API}/novos-registros/cadastrar`, data, {
                headers: {
                    'Authorization': token
                }
            });
            console.log("[registroRepository - postRegistro()] Registro enviado com sucesso:", response.data);
            return response.data;
        } catch (error) {
            console.error("[registroRepository - postRegistro()] Erro ao enviar o registro do usuário", error);
            throw error;
        }
    },

    getRegistro: async (token: string) => {
        try{
            const response = await axios.get(`${URL_PREVDENT_JAVA_API}/novos-registros`, {
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

export const dentistaRepository = {
    getDentistas: async (token: string) => {
        try{
            const response = await axios.get(`${URL_PREVDENT_JAVA_API}/dentista`, {
                headers: {
                    'Authorization': token
                }
            });
            console.log("[dentistaRepository - getDentistas()] Dentistas buscados com sucesso:", response.data);
            return response.data;
        }catch(error){
            console.error("[dentistaRepository - getDentistas()] Erro ao buscar os dentistas", error);
            throw error;
        }
    }
}