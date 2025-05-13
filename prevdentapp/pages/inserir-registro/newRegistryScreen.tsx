import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,  
} from "react-native";
import { useForm } from "react-hook-form";
import GlobalStyle from "../../Components/styles/Global";
import Icon from "react-native-vector-icons/MaterialIcons";
import InputRegistry from "../../Components/common/inputRegistry";
import ButtonAddRegistry from "../../Components/common/buttonAddRegistry";
import BackArrow from "../../Components/common/backArrowComponent";
import { RegistroInterface } from "../../model/registro.interface";
import { useState } from "react";
import { registroController } from "../../Components/controller/api.controller";
import { useAuth } from "../../Components/context/auth.context";
import { SelectRegistry } from "../../Components/common/registry/selectRegistry.dropdown";
import { ModalFeedback } from "../../Components/common/registry/sucess-error.modal";
import { ModalAllRegistries } from "../../Components/common/registry/redirect.registries.modal";
import { useNavigation } from "@react-navigation/native";

export default function NewRegistryScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistroInterface>({
    defaultValues: {
      tipo: "",
      ocorrencia: "",
      intensidade: "",
      informacoes_adicionais: "",
    },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(true);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const { user } = useAuth();
  const navigation = useNavigation();

  const ocorrenciaOptions = [
    { label: "Algumas horas", value: "Algumas horas" },
    { label: "cerca de 1 dia", value: "cerca de 1 dia" },
    { label: "cerca de 3 dias", value: "cerca de 3 dia" },
    { label: "cerca de 1 semana", value: "cerca de 1 semana" },
    { label: "2 semanas ou mais", value: "2 semanas ou mais" },
  ];

  const intensidadeOptions = [
    { label: "Leve", value: "leve" },
    { label: "Incomodo", value: "incomodo" },
    { label: "Moderada", value: "moderada" },
    { label: "Intensa", value: "intensa" },
    { label: "Urgente", value: "urgente" },
  ];

  async function onSubmit(data: RegistroInterface) {
    try {
      await registroController.submitRegistry(data, user?.token || "");
      setModalMessage("Registro realizado com sucesso!");
      setModalSuccess(true);
      setModalVisible(true);
      reset();
    } catch (error) {
      console.error(
        "[NewRegistryScreen - submitRegistry()] Erro ao enviar registro",
        error
      );
      setModalMessage("Erro ao enviar o registro. Tente novamente.");
      setModalSuccess(false);
      setModalVisible(true);
    }
  }

  const handleGoToRegistros = () => {
    setInfoModalVisible(false);
    navigation.navigate("InfoUsuario");
  };

  return (
    <View style={GlobalStyle.containerHome}>
      <BackArrow />
      <View style={{ width: "80%" }}>
        <View style={styles.header}>
          <View style={GlobalStyle.tituloPaginaArea}>
            <Text style={GlobalStyle.tituloPagina}>Novo registro</Text>
          </View>
          <TouchableOpacity onPress={() => setInfoModalVisible(true)}>
            <Icon name="more-vert" size={30} />
          </TouchableOpacity>
        </View>

        <InputRegistry
          name="tipo"
          control={control}
          placeholder="Tipo (Dor, sangramento, sensibilidade)"
          error={errors.tipo}
        />

        <SelectRegistry
          name="ocorrencia"
          control={control}
          placeholder="Selecione a ocorrência"
          items={ocorrenciaOptions}
          error={errors.ocorrencia}
        />

        <SelectRegistry
          name="intensidade"
          control={control}
          placeholder="Selecione a intensidade"
          items={intensidadeOptions}
          error={errors.intensidade}
        />

        <InputRegistry
          name="informacoes_adicionais"
          control={control}
          placeholder="Informações adicionais"
          height={150}
          error={errors.informacoes_adicionais}
        />

        <ButtonAddRegistry onPress={handleSubmit(onSubmit)} />
      </View>

      <ModalFeedback
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        success={modalSuccess}
        message={modalMessage}
      />

      <ModalAllRegistries
        visible={infoModalVisible}
        onClose={() => setInfoModalVisible(false)}
        onNavigate={handleGoToRegistros}
      />
    </View>
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
});
