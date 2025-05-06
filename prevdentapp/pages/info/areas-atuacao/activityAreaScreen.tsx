import React, { useEffect, useState } from "react";
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
import { apiController } from "../../../Components/controller/api.controller"; 
import { ActivityDataInterface } from "../../../model/activityData.interface";

function ActivityAreaScreen() {
  const navigation = useNavigation();
  const [activityData, setActivityData] = useState<ActivityDataInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleNavigate = (area: ActivityDataInterface) => {
    navigation.navigate("AreaDetailsScreen", area); 
  };

  
  const fetchAreasAtuacao = async () => {
    try {
      const areas = await apiController.fetchAreasAtuacao(); 
      setActivityData(areas); 
    } catch (err) {
      setError("Erro ao carregar as áreas de atuação."); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchAreasAtuacao(); 
  }, []);

  
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{ marginTop: 20 }}
      />
    );
  }

  
  if (error) {
    return <Text style={{ color: "red" }}>{error}</Text>;
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
