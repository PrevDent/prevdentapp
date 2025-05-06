export interface AppointmentInterface {
  idConsulta: number;
  data: string;
  dentista: Dentista;
  diagnostico?: string;
  paciente: Paciente;
  tipoTratamento?: string;
}

interface Dentista {
  documento: string,
  especializacao: string,
  idDentista: string
  nome: string;
}

interface Paciente {
  cpf: string,
  dataNascimento: string,
  idPaciente: string
  nome: string;
}