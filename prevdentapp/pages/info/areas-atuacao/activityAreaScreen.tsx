import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import GlobalStyles from "../../../Components/styles/Global";
import BackArrow from "../../../Components/common/backArrowComponent";
import ActivityCard from "../../../Components/common/activityAreaCard";
import { useNavigation } from "@react-navigation/native";
import { ActivityDataInterface } from "../../../model/activityData.interface";
import areasData from "../../../Components/data/areas-atuacao.json"; 


function ActivityAreaScreen() {
  const navigation = useNavigation();
  const [activityData, setActivityData] = useState<ActivityDataInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setActivityData(areasData);
    setLoading(false);
  }, []);

  const handleNavigate = (area: ActivityDataInterface) => {
    navigation.navigate("AreaDetailsScreen", area);
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
    );
  }

  return (
    <ScrollView>
      <View style={GlobalStyles.containerHome}>
        <BackArrow />
        <View style={{ width: "80%" }}>
          <View style={GlobalStyles.tituloPaginaArea}>
            <Text style={GlobalStyles.tituloPagina}>Informações</Text>
          </View>
          {activityData.map((activity, index) => (
            <TouchableOpacity key={index} onPress={() => handleNavigate(activity)}>
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
