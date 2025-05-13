import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../Routes/RootStackNavigation";
import { useAuth } from  "../../Components/context/auth.context";
import Line from "../../Components/common/line"; 
import ButtonStandard from "../../Components/common/buttonStandard";
import InputAreaLogin from "../../Components/common/inputAreaLogin";
import GlobalStyle from "../../Components/styles/Global";
import ErrorModal from "../../Components/common/cadastro-login/error-modal";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: Props) { 
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      console.log("Login bem-sucedido!");
      // navigation.navigate('TabNavigation');
    } catch (error) {
      setErrorMessage('Verifique suas credenciais e tente novamente.');
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={GlobalStyle.container}>
      <Text style={styles.titlePage}>Login</Text>
      <View>
        <InputAreaLogin placeholder="E-mail" value={email} onChangeText={setEmail} />
        <InputAreaLogin placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      </View>

      <ButtonStandard text="Entrar" onPress={handleLogin} />

      <View style={styles.naoPossuiContaArea}>
        <Text style={styles.naoPossuiContaText}>Não possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
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

      <ErrorModal visible={modalVisible} onClose={closeModal} message={errorMessage} />
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