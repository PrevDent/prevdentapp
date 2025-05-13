import axios from "axios";
import { URL_PREVDENT_JAVA_API } from "../../constants";

export const loginRepository = {
    registerUser: async (name: string, email: string, cpf: string, birthDate: string, password: string, role: string) => {
        try {
            const response = await axios.post(`${URL_PREVDENT_JAVA_API}/paciente/cadastrar`, {
                nome: name,
                email,
                cpf,
                data_nascimento: birthDate,
                senha: password,
                role,
              });
              return response.data; 
        } catch (error) {
            console.error("[Login Repository] Erro ao registrar o usuário: ", error);
            throw error; 
        }
    },

    loginUser: async (email: string, password: string) => {
        try {
            const response = await axios.post(`${URL_PREVDENT_JAVA_API}/paciente/login`, {
                email,
                senha: password,
            });
            return response.data; 
        } catch (error) {
            console.error("[Login Repository] Erro ao logar usuário: ", error);
            throw error; 
        }
    }
};