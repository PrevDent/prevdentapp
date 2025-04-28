import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface ActivityCardProps {
  icon: string;
  title: string;
  description: string;
  iconBackgroundColor: string;
}

const ActivityCard = ({ icon, title, description, iconBackgroundColor }: ActivityCardProps) => {
  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
        <Icon name={icon} size={30} color="#FFFFFF" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 13,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: "20%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#000",
    fontWeight: "400",
  },
});

export default ActivityCard;