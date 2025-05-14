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
import SearchBar from "../../Components/common/searchBar";
import AppointmentCard from "../../Components/common/appointmentsCard";
import DetailsModal from "../../Components/common/home/modal-details";
import { AppointmentInterface } from "../../model/appointment.interface";
import { useNavigation } from "@react-navigation/native";
import { apiController } from "../../Components/controller/api.controller";
import { MonthsEnum } from "../../model/month.enum";
import { useAuth } from "../../Components/context/auth.context";
import Line from "../../Components/common/line";

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
    <ScrollView>
      <View style={GlobalStyle.containerHome}>
        <View style={styles.header}>
          <View style={styles.olaNome}>
            <Text style={styles.textOla}>Olá,</Text>
            <Text style={styles.textOlaNome}>{user?.nome}</Text>
          </View>
          <TouchableOpacity onPress={handleProfileScreen}>
            <Image source={require("../../assets/vitor-perfil.png")} />
          </TouchableOpacity>
        </View>

        <Line color="#c6c6c6"/>

        <Image
          style={styles.bannerContainer}
          source={require("./../../assets/banner.png")}
        />

        <View style={GlobalStyle.tituloPaginaArea}>
          <Text style={GlobalStyle.tituloPagina}>Consultas agendadas</Text>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
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
});
