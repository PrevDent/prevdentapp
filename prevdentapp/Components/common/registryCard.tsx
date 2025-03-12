import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PainLevelBar from "./../common/painLevelBar";

interface InfoCardProps {
  title: string;
  icon: string;
  scale: string;
}

const InfoCard = ({
  title = "ze gordola",
  icon = "assignment",
  scale = "10",
}: InfoCardProps) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.contentContainer}>
          <View  style={styles.contentArea}>
            <View style={styles.iconContainer}>
              <Icon name={icon} size={30} color="#0077d7"/>
            </View>
            <View style={styles.textArea}>
              <Text style={styles.title}>{title}</Text>
              ;
              <PainLevelBar painLevel={5}/>
            </View>
          </View>

          <TouchableOpacity style={styles.optionsButton}>
            <Icon name="more-vert" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 80,
    borderColor: "#999999",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    padding: 10,
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
    gap: 5
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

export default InfoCard;
