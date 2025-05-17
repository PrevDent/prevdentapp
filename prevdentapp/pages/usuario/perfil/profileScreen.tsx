import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuItemComponent from "../../../Components/common/infoProfileCard";
import StatsProfileCard from "../../../Components/common/statsProfile";
import BackArrow from "../../../Components/common/backArrowComponent";
import GlobalStyles from "../../../Components/styles/Global";
import { useAuth } from "../../../Components/context/auth.context";
import { apiController } from "../../../Components/controller/api.controller";
import { AppointmentInterface } from "../../../model/appointment.interface";

type MenuItem = {
  title: string;
  screen: string;
  color?: string;
};

function ProfileScreen() {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  const [qtdConsultas, setQtdConsultas] = useState("0");
  const [proximaConsulta, setProximaConsulta] = useState("--/--");

  const menuItems: MenuItem[] = [
    { title: "Informações pessoais", screen: "InfoUsuario" },
    { title: "Meus Agendamentos", screen: "MyAppointment" },
    { title: "Consultas realizadas", screen: "UnderConstructionScreen" },
    { title: "Notificações", screen: "UnderConstructionScreen" },
    { title: "Alterar plano", screen: "UnderConstructionScreen" },
    { title: "Configurações", screen: "UnderConstructionScreen" },
    { title: "Sair da conta", screen: "Login", color: "red" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível sair da conta.");
    }
  };

  const fetchConsultas = async () => {
    try {
      const consultas: AppointmentInterface[] = await apiController.fetchMinhasConsultas(user?.token || "");
      setQtdConsultas(consultas.length.toString());

      const hoje = new Date();
      const futuras = consultas.filter((c) => new Date(c.data) >= hoje);

      if (futuras.length > 0) {
        const maisProxima = futuras.reduce((anterior, atual) =>
          new Date(anterior.data) < new Date(atual.data) ? anterior : atual
        );
        const data = new Date(maisProxima.data);
        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        setProximaConsulta(`${dia}/${mes}`);
      }
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }
  };

  useEffect(() => {
    fetchConsultas();
  }, []);

  return (
    <View style={GlobalStyles.containerHome}>
      <BackArrow />
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require("./../../../assets/profile-picture.png")}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>{user?.nome}</Text>
          <Text style={styles.plan}>plano basic+</Text>
        </View>

        <View style={styles.statsContainer}>
          <StatsProfileCard content={qtdConsultas} subTitle="Consultas agendadas" />
          <StatsProfileCard content={proximaConsulta} subTitle="Próxima consulta" />
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <MenuItemComponent
              key={index}
              title={item.title}
              onPress={
                item.title === "Sair da conta"
                  ? handleLogout
                  : () => navigation.navigate(item.screen as never)
              }
              color={item.color}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  menuContainer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
