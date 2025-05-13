import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TextInputProps,
} from "react-native";
import { Controller, Control, FieldError } from "react-hook-form";

interface InputRegistryProps extends TextInputProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  height?: number;
  top?: number;
  error?: FieldError;
}

function InputRegistry({
  name,
  control,
  placeholder = "",
  height = 70,
  top = 0,
  error,
  ...rest
}: InputRegistryProps) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            style={[
              styles.textInput,
              { height: height, top: top },
              error && { borderColor: "red" },
            ]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={height > 100}
            textAlignVertical="top"
            {...rest}
          />
        )}
      />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
    backgroundColor: "#f6f6f6",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
    color: "#333333",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginTop: 5,
    fontSize: 13,
  },
});

export default InputRegistry;
