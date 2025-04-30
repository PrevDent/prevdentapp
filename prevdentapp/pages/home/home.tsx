import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import GlobalStyle from "../../Components/styles/Global";
import SearchBar from "../../Components/common/searchBar";
import AppointmentCard from "../../Components/common/appointmentsCard";
import DetailsModal from "../../Components/common/home/modal-details";
import { AppointmentInterface } from "../../model/appointment.interface";
import { useNavigation } from "@react-navigation/native";

const appointments: AppointmentInterface[] = [
  {
    id: 1,
    day: "10",
    month: "Nov",
    time: "10:00",
    doctorName: "Dr. Vitor Santos",
    speciality: "Cardiologista",
    description: "Consulta para avaliação de saúde cardíaca.",
  },
  {
    id: 2,
    day: "12",
    month: "Nov",
    time: "11:00",
    doctorName: "Dr. Ana Silva",
    speciality: "Pediatra",
    description: "Consulta para check-up pediátrico.",
  },
  {
    id: 3,
    day: "15",
    month: "Nov",
    time: "09:30",
    doctorName: "Dr. José Ribeiro",
    speciality: "Dentista",
    description: "aniversairo bala do luisao, sair da aula para comer e beber algo no shopping seloco cachueira",
  },
  {
    id: 4,
    day: "20",
    month: "Out",
    time: "17:30",
    doctorName: "Dr. Vagabuno Ribeiro",
    speciality: "Putinha",
    description: "Consulta de urgência.",
  },
];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentInterface | null>(null);

  const openModal = (appointment: AppointmentInterface) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  
const navigation = useNavigation();

const handleProfileScreen = () => {
  navigation.navigate("ProfileScreen");
}

  return (
    <ScrollView>
      <View style={GlobalStyle.containerHome}>
        <View style={styles.header}>
          <View style={styles.olaNome}>
            <Text style={styles.textOla}>Olá,</Text>
            <Text style={styles.textOlaNome}>Vitor Santos</Text>
          </View>
          <TouchableOpacity onPress={handleProfileScreen}>
          <Image source={require("../../assets/vitor-perfil.png")} />
          </TouchableOpacity>
        </View>

        <SearchBar />
        <View>
          <Image
            style={styles.bannerContainer}
            source={require("./../../assets/banner.png")}
          />
        </View>

        <View style={GlobalStyle.tituloPaginaArea}>
          <Text style={GlobalStyle.tituloPagina}>Consultas agendadas</Text>
        </View>

        <ScrollView style={{ marginTop: 20 }}>
          {appointments.map((appointment) => (
            <View key={appointment.id}>
              <AppointmentCard
                day={appointment.day}
                month={appointment.month}
                time={appointment.time}
                doctorName={appointment.doctorName}
                speciality={appointment.speciality}
                onPress={() => openModal(appointment)} // Passando a função onPress
              />
            </View>
          ))}
        </ScrollView>

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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalDescription: {
    marginVertical: 10,
    fontSize: 16,
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#003366',
    fontWeight: 'bold',
  },
});