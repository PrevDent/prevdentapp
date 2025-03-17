import React, { startTransition } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import GlobalStyle from "../../Components/styles/Global";
import Icon from "react-native-vector-icons/MaterialIcons";
import InputRegistry from "../../Components/common/inputRegistry";
import ButtonAddRegistry from "../../Components/common/buttonAddRegistry";

export default function NewRegistryScreen() {
  {
    return (
      <View style={GlobalStyle.containerHome}>
        <View style={styles.header}>
          <View style={GlobalStyle.tituloPaginaArea}>
            <Text style={GlobalStyle.tituloPagina}>Novo registro</Text>
          </View>
          <TouchableOpacity>
            <Icon name="more-vert" size={30} />
          </TouchableOpacity>
        </View>
    

        <InputRegistry placeholder="Tipo (Dor, sangramento, sensibilidade)"/>
        <InputRegistry placeholder="Ocorrência"/>
        <InputRegistry placeholder="intensidade"/>
        <InputRegistry placeholder="informações adicionais" height={150} />

        <ButtonAddRegistry/>
      </View>
    );
  }
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
