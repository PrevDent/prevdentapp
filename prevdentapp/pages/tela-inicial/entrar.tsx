import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Entrar() {
  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Entrar</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.textOu}>ou</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.buttonContinuar}>Continuar sem login</Text>
      </TouchableOpacity>

      <Image source={require('./../../assets/logo-horizontal-azul-sem-fundo.png')} style={styles.image}/>
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
    marginVertical: 60,
  },
  button: {
    backgroundColor: "#013EB0",
    paddingVertical: "4%",
    width: 340,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  buttonContinuar: {
    color: "#A6A3A3",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textOu: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  image:{
    marginTop: 50,    
  }
});
