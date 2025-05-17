import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  apiController,
  dentistaController,
} from "../../Components/controller/api.controller";
import GlobalStyles from "../../Components/styles/Global";
import BackArrow from "../../Components/common/backArrowComponent";
import SuccessModal from "../../Components/common/agendamentos/sucess.modal";
import ErrorModal from "../../Components/common/agendamentos/error.modal";
import OptionsModal from "../../Components/common/agendamentos/options.modal";
import { useAuth } from "../../Components/context/auth.context";

interface FormData {
  especialidade: string;
  documento: string;
  data: string;
  hora: string;
  tipo_tratamento: string;
}

export default function ScheduleAppointment() {
  const [dentistas, setDentistas] = useState<any[]>([]);
  const [cpf, setCpf] = useState<string>("");
  const [filteredDentistas, setFilteredDentistas] = useState<any[]>([]);
  const { control, handleSubmit, watch, reset } = useForm<FormData>();
  const [successVisible, setSuccessVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { user } = useAuth();
  const selectedEspecialidade = watch("especialidade");

  useEffect(() => {
    const fetchDentistas = async () => {
      try {
        const result = await dentistaController.fetchDentistas(
          user?.token || ""
        );
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
      if (!data.data || !data.hora) {
        setErrorMessage("Preencha a data e hora da consulta.");
        setErrorVisible(true);
        return;
      }

      const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      const horaRegex = /^\d{2}:\d{2}$/;

      if (!dataRegex.test(data.data) || !horaRegex.test(data.hora)) {
        setErrorMessage(
          "Formato de data ou hora inválido. Use DD/MM/AAAA e HH:MM."
        );
        setErrorVisible(true);
        return;
      }

      const [day, month, year] = data.data.split("/");
      const [hours, minutes] = data.hora.split(":");

      const dataConsulta = new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hours),
        Number(minutes)
      );

      const agora = new Date();
      if (isNaN(dataConsulta.getTime())) {
        setErrorMessage("Data ou hora inválida.");
        setErrorVisible(true);
        return;
      }

      if (dataConsulta <= agora) {
        setErrorMessage("A data e hora devem ser posteriores ao momento atual.");
        setErrorVisible(true);
        return;
      }

      const payload = {
        paciente: { cpf },
        dentista: { documento_dentista: data.documento },
        data_consulta: dataConsulta.toISOString(),
        tipo_tratamento: data.tipo_tratamento,
      };

      await apiController.submitAppointmment(payload, user?.token || "");
      setSuccessVisible(true);
      reset();
    } catch (err) {
      console.error(err);
      setErrorMessage("Erro ao enviar os dados. Tente novamente.");
      setErrorVisible(true);
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
          <TouchableOpacity onPress={() => setOptionsVisible(true)}>
            <Icon name="more-vert" size={30} />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Especialidade</Text>
        <Controller
          control={control}
          name="especialidade"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              onValueChange={onChange}
              value={value}
              placeholder={{
                label: "Selecione uma especialidade",
                value: null,
              }}
              items={[
                ...new Set(dentistas.map((d: any) => d.especializacao)),
              ].map((especialidade: string) => ({
                label: especialidade,
                value: especialidade,
              }))}
            />
          )}
        />

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

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Agendar consulta</Text>
        </TouchableOpacity>
      </View>

      <SuccessModal
        visible={successVisible}
        onClose={() => setSuccessVisible(false)}
      />
      <ErrorModal
        visible={errorVisible}
        onClose={() => setErrorVisible(false)}
        message={errorMessage}
      />
      <OptionsModal
        visible={optionsVisible}
        onClose={() => setOptionsVisible(false)}
      />
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
