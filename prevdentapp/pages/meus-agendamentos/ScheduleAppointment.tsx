import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiController, dentistaController } from "../../Components/controller/api.controller";
import GlobalStyles from "../../Components/styles/Global";
import BackArrow from "../../Components/common/backArrowComponent";
import { useAuth } from "../../Components/context/auth.context";

interface FormData {
  especialidade: string;
  documento: string;
  data: string; // dd/mm/yyyy
  hora: string; // hh:mm
  tipo_tratamento: string;
}

export default function ScheduleAppointment() {
  const [dentistas, setDentistas] = useState<any[]>([]);
  const [cpf, setCpf] = useState<string>("");
  const [filteredDentistas, setFilteredDentistas] = useState<any[]>([]);
  const { control, handleSubmit, watch, reset } = useForm<FormData>();
  const { user } = useAuth();

  const selectedEspecialidade = watch("especialidade");

  useEffect(() => {
    const fetchDentistas = async () => {
      try {
        const result = await dentistaController.fetchDentistas(user?.token || "");
        setCpf(user?.cpf || "");
        setDentistas(result);
      } catch (err) {
        console.error("Erro ao buscar dentistas", err);
      }
    };

    fetchDentistas();
  }, []);

  useEffect(() => {
    if (selectedEspecialidade) {
      const filtrados = dentistas.filter(
        (d: any) => d.especializacao === selectedEspecialidade
      );
      setFilteredDentistas(filtrados);
    } else {
      setFilteredDentistas([]);
    }
  }, [selectedEspecialidade, dentistas]);

  const onSubmit = async (data: FormData) => {
    try {
      const [day, month, year] = data.data.split("/");
      const [hours, minutes] = data.hora.split(":");

      const dataConsulta = new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hours),
        Number(minutes)
      );

      const payload = {
        paciente: { cpf },
        dentista: { documento_dentista: data.documento },
        data_consulta: dataConsulta.toISOString(),
        tipo_tratamento: data.tipo_tratamento,
      };

      await apiController.submitAppointmment(payload, user?.token || "");
      Alert.alert("Sucesso", "Consulta agendada com sucesso!");
      reset();
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", "Não foi possível agendar a consulta.");
    }
  };

  return (
    <ScrollView contentContainerStyle={GlobalStyles.containerHome}>
      <BackArrow />
      <View style={{ width: "80%" }}>
        <View style={styles.header}>
          <View style={GlobalStyles.tituloPaginaArea}>
            <Text style={GlobalStyles.tituloPagina}>Novo agendamento</Text>
          </View>
          <TouchableOpacity>
            <Icon name="more-vert" size={30} />
          </TouchableOpacity>
        </View>

        {/* Especialidade */}
        <Text style={styles.label}>Especialidade</Text>
        <Controller
          control={control}
          name="especialidade"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              onValueChange={onChange}
              value={value}
              placeholder={{ label: "Selecione uma especialidade", value: null }}
              items={[
                ...new Set(dentistas.map((d: any) => d.especializacao)),
              ].map((especialidade: string) => ({
                label: especialidade,
                value: especialidade,
              }))}
            />
          )}
        />

        {/* Dentista */}
        <Text style={styles.label}>Dentista</Text>
        <Controller
          control={control}
          name="documento"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              onValueChange={onChange}
              value={value}
              placeholder={{ label: "Selecione um dentista", value: null }}
              items={filteredDentistas.map((dentista: any) => ({
                label: dentista.nome,
                value: dentista.documento,
              }))}
            />
          )}
        />

        {/* Data */}
        <Text style={styles.label}>Data da consulta</Text>
        <Controller
          control={control}
          name="data"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Ex: 13/05/2025"
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
            />
          )}
        />

        {/* Hora */}
        <Text style={styles.label}>Hora da consulta</Text>
        <Controller
          control={control}
          name="hora"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Ex: 14:30"
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
            />
          )}
        />

        {/* Tipo de tratamento */}
        <Text style={styles.label}>Tipo de tratamento</Text>
        <Controller
          control={control}
          name="tipo_tratamento"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Ex: Clareamento"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Agendar consulta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#013EB0",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
