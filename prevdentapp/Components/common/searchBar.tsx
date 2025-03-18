import React from "react";
import {
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface SearchBarProps {
  placeholder?: string;
  width?: number;
  marginVertical?: number;
}

const SearchBar = ({
  placeholder = "Pesquisar sintomas",
  width = 360,
  marginVertical = 20,
}: SearchBarProps) => {
  return (
    <View style={[styles.container, { width, marginVertical }]}>
      <Icon name="search" size={20} color="#CCCCCC" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor="#CCCCCC"
      />
      <TouchableOpacity>
        <Icon name="tune" size={20} color="#CCCCCC" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 10,
  },
  textInput: {
    flex: 1,
    color: "#CCCCCC",
    fontSize: 16,
    marginHorizontal: 10,
  },
  icon: {},
});

export default SearchBar;
