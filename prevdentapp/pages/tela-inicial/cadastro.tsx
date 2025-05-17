import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Line from "../../Components/common/line";
import { RootStackParamList } from "../../Routes/RootStackNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../../Components/context/auth.context";
import ButtonStandard from "../../Components/common/buttonStandard";
import InputAreaLogin from "../../Components/common/inputAreaLogin";
import GlobalStyle from "../../Components/styles/Global";
import SuccessModal from "../../Components/common/cadastro-login/sucess.modal";

type CadastroScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Cadastro"
>;

interface Props {
  navigation: CadastroScreenNavigationProp;
}

export default function CadastroScreen({ navigation }: Props) {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = async () => {
    try {
      const formattedBirthDate = birthDate.split("/").reverse().join("-");

      await register(name, email, cpf, formattedBirthDate, password, "Admin");
      setModalVisible(true); 
    } catch (error) {
      Alert.alert(
        "Cadastro falhou",
        "Verifique seus dados e tente novamente."
      );
    }
  };

  

  const closeModal = () => {
    setModalVisible(false);
  };

  const redirectToLogin = () => {
    closeModal();
    navigation.navigate("Login");
  };

  return (
    <View style={GlobalStyle.container}>
      <Text style={styles.titlePage}>Cadastro</Text>

      <InputAreaLogin placeholder="Nome" value={name} onChangeText={setName} />
      <InputAreaLogin placeholder="CPF" value={cpf} onChangeText={setCpf} />
      <InputAreaLogin
        placeholder="D. nascimento ex: 13/05/2025"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <InputAreaLogin
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <InputAreaLogin
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <ButtonStandard text="Cadastrar" onPress={handleRegister} />

      <View style={styles.jaPossuiContaArea}>
        <Text style={styles.jaPossuiContaText}>Já possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.entraAquiText}>Entre aqui</Text>
        </TouchableOpacity>
      </View>

      <Line />

      <View style={styles.containerLoginSocial}>
        <View>
          <Text style={styles.cadastrarDeOutraForma}>
            Cadastrar de outra forma
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require("../../assets/logo-google.png")} />
          <Image source={require("../../assets/logo-apple.png")} />
          <Image source={require("../../assets/logo-facebook.png")} />
        </View>
      </View>

      <SuccessModal
        visible={modalVisible}
        onClose={closeModal}
        name={name}
        email={email}
        onRedirect={redirectToLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titlePage: {
    color: "#013EB0",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 40,
  },
  jaPossuiContaArea: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  jaPossuiContaText: {
    color: "#CCC",
    fontSize: 16,
    fontWeight: "300",
  },
  entraAquiText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  containerLoginSocial: {
    alignItems: "center",
  },
  cadastrarDeOutraForma: {
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
