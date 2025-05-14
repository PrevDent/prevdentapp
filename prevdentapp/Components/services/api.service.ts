import { ScheduleAppointmentInterface } from '../../model/appointment.interface';
import { RegistroInterface } from '../../model/registro.interface';
import { apiRepository, dentistaRepository, registroRepository } from '../repository/api.repository'; 

export const apiService = {
    async fetchAreasAtuacao() {
        try {
            const areas = await apiRepository.getAreasAtuacao();
            return areas; 
        } catch (error) {
            console.error("[apiService - fetchAreasAtuacao()] Erro no serviço ao buscar áreas de atuação:", error);
            throw error; 
        }
    },

    async fetchMinhasConsultas(token: string) {
        try {
            const consultas = await apiRepository.getMinhasConsultas(token);
            return consultas; 
        } catch (error) {
            console.error("[apiService - fetchMinhasConsultas()] Erro no serviço ao buscar consultas:", error);
            throw error; 
        }
    },

    async postAppointmment(data: ScheduleAppointmentInterface, token: string) {
        try {
            const response = await apiRepository.postAppointmment(data, token);
            return response; 
        } catch (error) {
            console.error("[apiService - postAppointmment()] Erro no serviço ao agendar consulta:", error);
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

export const dentistaService = {
    async fetchDentistas(token: string) {
        try {
            const dentistas = await dentistaRepository.getDentistas(token);
            return dentistas; 
        } catch (error) {
            console.error("[dentistaService - fetchDentistas()] Erro no serviço ao buscar dentistas:", error);
            throw error; 
        }
    },
}