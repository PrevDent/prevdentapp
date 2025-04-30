import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import GlobalStyles from "../../../Components/styles/Global";
import BackArrow from "../../../Components/common/backArrowComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Routes/RootStackNavigation";
import { RouteProp } from "@react-navigation/native";

type AreaDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AreaDetailsScreen"
>;

type AreaDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "AreaDetailsScreen"
>;

interface Props {
  navigation: AreaDetailsScreenNavigationProp;
  route: AreaDetailsScreenRouteProp;
}

export default function AreaDetailsScreen({ route }: Props) {
  const activity = route.params;


  return (
    <View style={styles.container}>
      <BackArrow />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{activity.title}</Text>
          <View style={styles.separator} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalhes:</Text>
          <Text style={styles.sectionText}>{activity.details}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Indicações:</Text>
          <Text style={styles.sectionText}>{activity.indications}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tratamento:</Text>
          <Text style={styles.sectionText}>{activity.treatment}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Diagnóstico:</Text>
          <Text style={styles.sectionText}>{activity.diagnosis}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recomendações:</Text>
          <Text style={styles.sectionText}>{activity.recommendations}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Procedimentos Comuns:</Text>
          <Text style={styles.sectionText}>{activity.procedures}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  scrollView: {
    marginTop: 60,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#003366",
  },
  separator: {
    height: 4,
    width: "50%",
    backgroundColor: "#003366",
    borderRadius: 2,
    marginTop: 5,
  },
  section: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: "#e6f0f0",
    borderRadius: 10,
    borderColor: "#003366",
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366",
  },
  sectionText: {
    fontSize: 14,
    marginTop: 5,
    color: "#333",
  },
});