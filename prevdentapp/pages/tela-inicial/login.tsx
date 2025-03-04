import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import Line from "../../Components/common/line"; // Importando seu componente de linha
import ButtonLogin from "../../Components/common/buttonLogin";
  
  export default function Login() {
    return (
      <View style={styles.container}>
        <Text style={styles.titlePage}>Login</Text>
  
        <View style={styles.inputArea}>
          <TextInput placeholder="Usuário" style={styles.textInput} />
        </View>
  
        <View style={styles.inputArea}>
          <TextInput placeholder="Senha" style={styles.textInput} />
        </View>
  
        <ButtonLogin text="Entrar"/>
        
        <View style={styles.naoPossuiContaArea}>
          <Text style={styles.naoPossuiContaText}>
            Não possui conta? 
          </Text>
          <TouchableOpacity>
            <Text style={styles.cadastreseText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
  
        <Line />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    titlePage: {
      color: "#013EB0",
      fontSize: 40,
      fontWeight: "bold",
      marginVertical: 40,
    },
    inputArea: {
      width: 300,
      marginVertical: 10,
      backgroundColor: "white",
      borderColor: "#e0e0e0",
      borderWidth: 1,
      borderRadius: 40,
      paddingVertical: 3,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    textInput: {
      color: "#CCCCCC",
      fontSize: 16,
      fontStyle: "italic",
    },
    button: {
      backgroundColor: "#013EB0",
      paddingVertical: "2%",
      width: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
    },
    textButton: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    naoPossuiContaArea: {
      flexDirection: 'row',
      alignItems: 'center',
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
  });