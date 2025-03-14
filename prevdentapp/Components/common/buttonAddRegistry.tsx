import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface buttonAddRegistryProps {
  placeholder?: string;
  color?: string;
  height?: number;
  top?: number;
}

const buttonAddRegistry = ({
  placeholder = "",
  color = "#f6f6f6",
  height = 70,
  top = 0,
}: buttonAddRegistryProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textButton}>Adicionar Registro</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "#D9D9D9",
    backgroundColor: "#45B3CB",
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  textButton:{
    width: "100%",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 15,
    fontWeight: "300",
  },
});

export default buttonAddRegistry;
