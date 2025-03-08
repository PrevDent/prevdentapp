import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface AppointmentCardProps {
  day: string;
  month: string;
  time: string;
  doctorName: string;
  speciality: string;
}

const AppointmentCard = ({
  day,
  month,
  time,
  doctorName,
  speciality,
}: AppointmentCardProps) => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{day}</Text>
          <Text style={styles.dateText}>{month}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.timeText}>{time}</Text>
          <Text style={styles.doctorName}>{doctorName}</Text>
          <Text style={styles.specialty}>{speciality}</Text>
          <TouchableOpacity style={styles.optionsButton}>
            <Icon name="more-vert" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 360,
    backgroundColor: "#003366",
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 13,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateContainer: {
    backgroundColor: "#aac9fc",
    borderRadius: 15,
    paddingVertical: "5%",
    paddingHorizontal: "9%",
    alignItems: "center",
  },
  dateText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
  },
  timeText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  doctorName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  specialty: {
    color: "#CCCCCC",
    fontSize: 14,
  },
  optionsButton: {
    padding: 5,
  },
});

export default AppointmentCard;
