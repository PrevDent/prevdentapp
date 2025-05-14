import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PainLevelBar from "./../common/painLevelBar";

interface RegistryCardProps {
  title: string;
  icon: string;
  scale: number;
  onPress?: () => void;
  onOptionsPress?: () => void;
}

const RegistryCard = ({
  title,
  icon,
  scale,
  onPress,
  onOptionsPress
}: RegistryCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.contentContainer}>
          <View style={styles.contentArea}>
            <View style={styles.iconContainer}>
              <Icon name={icon} size={30} color="#fff" />
            </View>
            <View style={styles.textArea}>
              <Text style={styles.title}>{title}</Text>
              <PainLevelBar painLevel={scale} />
            </View>
          </View>

          <TouchableOpacity style={styles.optionsButton} onPress={onOptionsPress}>
            <Icon name="more-vert" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 80,
    borderColor: "#999999",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    padding: 10,
    marginVertical: 7,
  },
  iconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#64a8bc",
    borderRadius: 20,
  },
  contentContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentArea:{
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },
  optionsButton: {

  },
  textArea: {
    alignItems: "flex-start",
    gap: 12
  },
  title:{
    fontSize: 20,
    fontWeight: "600",
    color: "#000000"
  },
  scale:{
    fontSize: 16,
    color: "#000000"
  }
});

export default RegistryCard;
