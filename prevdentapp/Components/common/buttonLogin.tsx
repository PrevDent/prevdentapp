import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonLoginProps {
  text: string;
  color?: string;
  width?: number;
  marginVertical?: number;
  onPress?: () => void;
}

const ButtonLogin = ({
  text = "buttonText",
  color = "#013EB0",
  width = 150,
  marginVertical = 20,
  onPress,
}: ButtonLoginProps) => {

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, width, marginVertical }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ButtonLogin;
