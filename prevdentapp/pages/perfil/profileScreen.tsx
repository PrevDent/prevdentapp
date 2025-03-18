// src/screens/ProfileScreen.tsx
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuItemComponent from "../../Components/common/infoProfileCard";
import StatsProfileCard from "../../Components/common/statsProfile";
import BackArrow from "../../Components/common/backArrowComponent";
import GlobalStyles from "../../Components/styles/Global";

type MenuItem = {
  title: string;
  screen: string;
  color?: string;
};

function ProfileScreen() {
  const navigation = useNavigation();

  const menuItems: MenuItem[] = [
    { title: "Informações pessoais", screen: "UnderConstructionScreen" },
    { title: "Meus Agendamentos", screen: "UnderConstructionScreen" },
    { title: "Consultas realizadas", screen: "UnderConstructionScreen" },
    { title: "Notificações", screen: "UnderConstructionScreen" },
    { title: "Alterar plano", screen: "UnderConstructionScreen" },
    { title: "Configurações", screen: "UnderConstructionScreen" },
    { title: "Sair da conta", screen: "Login", color: "red" },
  ];

  return (
    <View style={GlobalStyles.containerHome}>
      <BackArrow />
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require("./../../assets/profile-picture.png")}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>Vitor Santos</Text>
          <Text style={styles.plan}>plano basic+</Text>
        </View>
        <View style={styles.statsContainer}>
          <StatsProfileCard content="15" subTitle="Consultas relizadas" />
          <StatsProfileCard content="21/01" subTitle="Próxima consulta" />
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <MenuItemComponent
              key={index}
              title={item.title}
              onPress={() => navigation.navigate(item.screen as never)}
              color={item.color}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "20%",
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  plan: {
    fontSize: 16,
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#FFF",
    marginBottom: 20,
    gap: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#013EB0",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  menuContainer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
