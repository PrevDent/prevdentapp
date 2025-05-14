export interface AppointmentInterface {
  idConsulta: number;
  data: string;
  dentista: Dentista;
  diagnostico?: string;
  paciente: Paciente;
  tipoTratamento?: string;
}

export interface ScheduleAppointmentInterface{
  paciente: Paciente;
  dentista: Dentista;
  data_consulta: string;
  tipo_tratamento: string;
}

interface Dentista {
  idDentista?: string
  nome?: string;
  documento_dentista?: string,
  especializacao?: string,
}

interface Paciente {
  idPaciente?: string
  nome?: string;
  cpf?: string,
  dataNascimento?: string,
}