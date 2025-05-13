export interface JwtPayload {
  sub: string;
  nome: string;
  cpf: string;
  data_nascimento: string;
  exp: number;
}
