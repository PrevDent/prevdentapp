import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import GlobalStyles from "../../../Components/styles/Global";
import BackArrow from "../../../Components/common/backArrowComponent";
import ActivityCard from "../../../Components/common/activityAreaCard";

const activityData = [
  {
    icon: "heart-outline",
    title: "Ortodontia",
    description: "Dúvidas, informações e consultas.",
    iconBackgroundColor: "#c95238",
  },
  {
    icon: "leaf-outline",
    title: "Endodontia",
    description: "Dúvidas, informações e consultas.",
    iconBackgroundColor: "#43bb59",
  },
  {
    icon: "brain-outline",
    title: "Periodontia",
    description: "Dúvidas, informações e consultas.",
    iconBackgroundColor: "#A2A2A2",
  },
  {
    icon: "person-outline",
    title: "Odontopediatria",
    description: "Dúvidas, informações e consultas.",
    iconBackgroundColor: "#3182bc",
  },
  {
    icon: "medkit-outline",
    title: "Prótese Dentária",
    description: "Dúvidas, informações e consultas.",
    iconBackgroundColor: "#dcb533",
  },
  {
    icon: "ear-outline",
    title: "Cirurgia Oral e Maxilofacial",
    description: "Dúvidas, informações e consultas.",
    iconBackgroundColor: "#b9d486",
  },
  {
    icon: "bicycle-outline",
    title: "Odontologia Geriátrica",
    description: "Dúvidas, informações e consultas.",
    iconBackgroundColor: "#b42b51",
  },
];

function ActivityAreaScreen() {
  return (
    <ScrollView>
      <View style={GlobalStyles.containerHome}>
        <BackArrow />
        <View style={{ width: "80%" }}>
          <View style={GlobalStyles.tituloPaginaArea}>
            <Text style={GlobalStyles.tituloPagina}>Informações</Text>
          </View>
          {activityData.map((activity, index) => (
            <ActivityCard
              key={index}
              icon={activity.icon}
              title={activity.title}
              description={activity.description}
              iconBackgroundColor={activity.iconBackgroundColor}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default ActivityAreaScreen;

const styles = StyleSheet.create({
  cardList: {
    marginTop: 20,
  },
});
