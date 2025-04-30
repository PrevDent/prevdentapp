import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import GlobalStyles from "../../../Components/styles/Global";
import BackArrow from "../../../Components/common/backArrowComponent";
import ActivityCard from "../../../Components/common/activityAreaCard";
import { useNavigation } from '@react-navigation/native';
import { activityData } from "../../../data/activityData"; // Certifique-se de que este caminho está correto
import { ActivityDataInterface } from "../../../model/activityData.interface";

function ActivityAreaScreen() {
  const navigation = useNavigation();

  const handleNavigate = (area: ActivityDataInterface) => {
    navigation.navigate('AreaDetailsScreen', area);
  };

  return (
    <ScrollView>
      <View style={GlobalStyles.containerHome}>
        <BackArrow />
        <View style={{ width: "80%" }}>
          <View style={GlobalStyles.tituloPaginaArea}>
            <Text style={GlobalStyles.tituloPagina}>Informações</Text>
          </View>
          {activityData.map((activity, index) => (
            <TouchableOpacity key={index}>
              <ActivityCard
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                iconBackgroundColor={activity.iconBackgroundColor}
                onPress={() => handleNavigate(activity)}
              />
            </TouchableOpacity>
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