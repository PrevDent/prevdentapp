import { TouchableOpacity, Text, StyleSheet, View} from "react-native";
import Line from "./line";

interface MenuItemProfileProps {
  title: string;
  onPress?: () => void;
  color?: string;
  width?: number;
  marginVertical?: number;
  marginHorizontal?: number;
}

function MenuItemProfileComponent({
  title,
  onPress,
  color = "#000",
  width = 300,
  marginVertical = 0,
  marginHorizontal = 0,
}: MenuItemProfileProps) {
  return (
    <View style={{ alignItems: "center",alignSelf: "center", width }}>
      <TouchableOpacity
        style={{ marginHorizontal, marginVertical }}
        onPress={onPress}
      >
        <Text style={[styles.menuItemText, { color }]}>{title}</Text>
        <Line marginVertical={10} color="#00000047" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MenuItemProfileComponent;
