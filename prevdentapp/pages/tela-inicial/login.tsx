import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Line from "../../Components/common/line"; // Importando seu componente de linha
import ButtonLogin from "../../Components/common/buttonLogin";
import InputAreaLogin from "../../Components/common/inputAreaLogin";
import GlobalStyle from "../../Components/styles/Global";

export default function Login() {
  return (
    <View style={GlobalStyle.container}>
      <Text style={styles.titlePage}>Login</Text>
      <View>
        <InputAreaLogin placeholder="E-mail" />
        <InputAreaLogin placeholder="Senha" />
      </View>

      <ButtonLogin text="Entrar" />

      <View style={styles.naoPossuiContaArea}>
        <Text style={styles.naoPossuiContaText}>Não possui conta?</Text>
        <TouchableOpacity>
          <Text style={styles.cadastreseText}>Cadastre-se</Text>
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
  naoPossuiContaArea: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  naoPossuiContaText: {
    color: "#CCC",
    fontSize: 16,
    fontWeight: "300",
  },
  cadastreseText: {
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
