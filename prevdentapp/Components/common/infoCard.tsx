import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; 

interface InfoCardProps {
  title: string; 
  content: string; 
  icon: string;
  color: string; 
  iconColor: string; 
}

const InfoCard = ({
  title,
  content,
  icon,
  color,
  iconColor,
}: InfoCardProps) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={30} color={iconColor} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{content}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.optionsButton}>
        <Icon name="more-vert" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 130,
    borderRadius: 15,
    padding: 15,
    margin: 10,
    alignItems: "flex-start",
  },
  iconContainer: {
    marginBottom: 10,
  },
  title: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
  },
  contentContainer:{
    marginTop: 10,
    gap:3
  },
  value: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  optionsButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default InfoCard;
