import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Line from "../../Components/common/line";
import ButtonLogin from "../../Components/common/buttonLogin";
import InputAreaLogin from "../../Components/common/inputAreaLogin";
import GlobalStyle from "../../Components/styles/Global";

export default function Login() {
  return (
    <View style={GlobalStyle.container}>
      <Text style={styles.titlePage}>Cadastro</Text>

      <InputAreaLogin placeholder="Nome" />
      <InputAreaLogin placeholder="CPF" />
      <InputAreaLogin placeholder="E-mail" />
      <InputAreaLogin placeholder="Senha" />

      <ButtonLogin text="Cadastrar" />

      <View style={styles.japossuicontaArea}>
        <Text style={styles.japossuicontaText}>Já possui conta?</Text>
        <TouchableOpacity>
          <Text style={styles.entreaquiText}>Entre aqui</Text>
        </TouchableOpacity>
      </View>

      <Line />

      <View style={styles.containerLoginSocial}>
        <View>
          <Text style={styles.cadastrarDeOutraForma}>Cadastrar de outra forma</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require("../../assets/logo-google.png")} />
          <Image source={require("../../assets/logo-apple.png")} />
          <Image source={require("../../assets/logo-facebook.png")} />
        </View>
      </View>
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
  japossuicontaArea: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  japossuicontaText: {
    color: "#CCC",
    fontSize: 16,
    fontWeight: "300",
  },
  entreaquiText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  containerLoginSocial:{
    alignItems: "center",
  },
  cadastrarDeOutraForma:{
    marginBottom: 20
  },
  imageContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
