import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import BackArrow from "../../Components/common/backArrowComponent";
import GlobalStyles from "../../Components/styles/Global";
import { useAuth } from "../../Components/context/auth.context";
import { AppointmentInterface } from "../../model/appointment.interface";
import { useEffect, useState } from "react";
import { apiController } from "../../Components/controller/api.controller";
import AppointmentCard from "../../Components/common/appointmentsCard";
import { MonthsEnum } from "../../model/month.enum";
import DetailsModal from "../../Components/common/home/modal-details";
import Line from "../../Components/common/line";
import ButtonStandard from "../../Components/common/buttonStandard";
import { useNavigation } from "@react-navigation/native";

export default function MyAppointment() {
  const { user } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentInterface | null>(null);
  const [appointments, setAppointments] = useState<AppointmentInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  const openModal = (appointment: AppointmentInterface) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleScheduleAppointment = () => {
    navigation.navigate("ScheduleAppointment");
  }

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
    <View style={GlobalStyles.containerHome}>
      <BackArrow />
      <ScrollView>
        <View>
          <Text style={{ ...GlobalStyles.tituloPagina, textAlign: "center" }}>
            Bem-vindo aos {"\n"}seus agendamentos, {user?.nome}!
          </Text>
        </View>

        <Line marginVertical={20} color="#c6c6c6" />

        <View style={{alignSelf:"center"}}>
          <ButtonStandard text="Agendar consulta" width={200} onPress={handleScheduleAppointment}/>
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
