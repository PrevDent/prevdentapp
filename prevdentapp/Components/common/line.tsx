import { StyleSheet, View } from "react-native";

interface LineProps {
  width?: number;
  color?: string;
  marginVertical?: number;
}

const Line = ({
  width = 320,
  color = "#000",
  marginVertical = 30,
}: LineProps) => {
  return (
    <View
      style={[styles.line, { width, borderBottomColor: color, marginVertical }]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    marginVertical: 20,
    alignSelf: "center",
  },
});

export default Line;
