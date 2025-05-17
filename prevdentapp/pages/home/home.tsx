import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import GlobalStyle from "../../Components/styles/Global";
import AppointmentCard from "../../Components/common/appointmentsCard";
import DetailsModal from "../../Components/common/home/modal-details";
import { AppointmentInterface } from "../../model/appointment.interface";
import { useNavigation } from "@react-navigation/native";
import { apiController } from "../../Components/controller/api.controller";
import { MonthsEnum } from "../../model/month.enum";
import { useAuth } from "../../Components/context/auth.context";
import Line from "../../Components/common/line";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentInterface | null>(null);
  const [appointments, setAppointments] = useState<AppointmentInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const navigation = useNavigation();

  const openModal = (appointment: AppointmentInterface) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleProfileScreen = () => {
    navigation.navigate("ProfileScreen");
  };

  const fetchMinhasConsultas = async () => {
    try {
      const consultasData = await apiController.fetchMinhasConsultas(
        user?.token || ""
      );
      setAppointments(consultasData);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar as consultas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMinhasConsultas();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#013EB0" />
        <Text>Carregando consultas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={GlobalStyle.containerHome}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.olaNome}>
            <Text style={styles.textOla}>Olá,</Text>
            <Text style={styles.textOlaNome}>{user?.nome}</Text>
          </View>
          <TouchableOpacity onPress={handleProfileScreen}>
            <Image source={require("../../assets/vitor-perfil.png")} />
          </TouchableOpacity>
        </View>

        <Line color="#c6c6c6" />

        <LinearGradient
          colors={["#2d76ff", "#acc9ff"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.bannerContainer}
        >
          <View style={styles.bannerContent}>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>
                É prazer te ajudar, {user?.nome?.split(" ")[0]}!
              </Text>
              <Text style={styles.bannerSubtitle}>
                Confira seus agendamentos e muito mais!
              </Text>
            </View>
            <Image
              source={require("../../assets/banner-feliz.png")}
              style={styles.bannerImage}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>

        <View style={[GlobalStyle.tituloPaginaArea, styles.titleSchedule]}>
          <Text style={GlobalStyle.tituloPagina}>Consultas agendadas</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ScheduleAppointment")}
          >
            <Icon name="more-vert" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        {appointments.length === 0 ? (
          <View style={styles.centered}>
            <Text style={styles.noAppointmentsText}>
              Você não possui consultas agendadas.
            </Text>
          </View>
        ) : (
          appointments.map((appointment) => (
            <View key={appointment.idConsulta}>
              <AppointmentCard
                day={new Date(appointment.data).getDate().toString()}
                month={MonthsEnum[new Date(appointment.data).getMonth() + 1]}
                time={new Date(appointment.data).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                doctorName={appointment.dentista.nome}
                speciality={appointment.dentista.especializacao}
                onPress={() => openModal(appointment)}
              />
            </View>
          ))
        )}

        {selectedAppointment && (
          <DetailsModal
            visible={modalVisible}
            onClose={closeModal}
            appointment={selectedAppointment}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
  },
  olaNome: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textOla: {
    fontWeight: "bold",
  },
  textOlaNome: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bannerContainer: {
    width: 360,
    height: 200,
    marginVertical: 20,
    borderRadius: 20,
    alignSelf: "center",
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  noAppointmentsText: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
  bannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  bannerTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },

  bannerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },

  bannerSubtitle: {
    fontSize: 14,
    color: "#4d4d4d",
  },

  bannerImage: {
    width: 200,
    height: 300,
  },
  titleSchedule:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: 360 
  }
});
