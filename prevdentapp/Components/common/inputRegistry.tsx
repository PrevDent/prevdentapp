import { View, TextInput, StyleSheet } from "react-native";

interface InputRegistryProps {
  placeholder?: string;
  color?: string;
  height?: number;
  top?: number;
}

const InputRegistry = ({
  placeholder = "",
  color = "#f6f6f6",
  height = 70,
  top = 0,
}: InputRegistryProps) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder={placeholder}
          style={[
            styles.textInput,
            { backgroundColor: color, height: height, top: top },
          ]}
          textAlign="left"
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  textInput: {
    color: "#333333",
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    paddingLeft: 20,
  },
});

export default InputRegistry;
