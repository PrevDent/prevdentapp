import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface buttonAddRegistryProps {
  placeholder?: string;
  color?: string;
  height?: number;
  top?: number;
  onPress?: () => void;
}

const buttonAddRegistry = ({
  placeholder = "Adicionar Registro",
  color = "#f6f6f6",
  height = 70,
  top = 0,
  onPress = () => {},
}: buttonAddRegistryProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textButton}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "#D9D9D9",
    backgroundColor: "#558DF5",
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
