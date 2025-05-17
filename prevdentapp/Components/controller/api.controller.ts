import { ScheduleAppointmentInterface } from '../../model/appointment.interface';
import { RegistroInterface } from '../../model/registro.interface';
import { apiService, dentistaService, registroService } from '../services/api.service'; 

export const apiController = {
     async fetchMinhasConsultas(token: string) {
        try {
            const consultas = await apiService.fetchMinhasConsultas(token);
            return consultas;
        } catch (error) {
            console.error("[apiController - fetchMinhasConsultas()] Erro na controller ao buscar consultas:", error);
            throw error;
        }
    },

    async submitAppointmment(data: ScheduleAppointmentInterface, token: string) {
        try {
            console.log("[apiController - submitAppointmment()] Dados recebidos na controller:");
            console.log(JSON.stringify(data))
            console.log(token);
            const response = await apiService.postAppointmment(data, token);
            return response;
        } catch (error) {
            console.error("[apiController - submitAppointmment()] Erro na controller ao agendar consulta:", error);
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

export const dentistaController = {
    async fetchDentistas(token: string) {
        try {
            const dentistas = await dentistaService.fetchDentistas(token);
            return dentistas; 
        } catch (error) {
            console.error("[dentistaController - fetchDentistas()] Erro no serviço ao buscar dentistas:", error);
            throw error; 
        }
    },
}