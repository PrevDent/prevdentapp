import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Control, Controller, FieldError } from "react-hook-form";

interface SelectRegistryProps {
  name: string;
  control: Control<any>;
  items: { label: string; value: string }[];
  placeholder: string;
  error?: FieldError;
}

export function SelectRegistry({
  name,
  control,
  items,
  placeholder,
  error,
}: SelectRegistryProps) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <RNPickerSelect
            onValueChange={onChange}
            value={value}
            placeholder={{ label: placeholder, value: "" }}
            items={items}
            style={pickerSelectStyles}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 5,
    backgroundColor: "#f6f6f6",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 10,
  },
  inputAndroid: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 10,
  },
});
