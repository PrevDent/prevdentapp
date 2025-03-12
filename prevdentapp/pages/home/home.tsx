import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import GlobalStyle from "../../Components/styles/Global";
import SearchBar from "../../Components/common/searchBar";
import AppointmentCard from "../../Components/common/appointmentsCard";
import Line from "../../Components/common/line";


const appointments = [
  { id: 1, day: "10", month: "Nov", time: "10:00", doctorName: "Dr. Vitor Santos", speciality: "Cardiologista" },
  { id: 2, day: "12", month: "Nov", time: "11:00", doctorName: "Dr. Ana Silva", speciality: "Pediatra" },
  { id: 3, day: "15", month: "Nov", time: "09:30", doctorName: "Dr. José Ribeiro", speciality: "Dentista" },
  { id: 4, day: "20", month: "Out", time: "17:30", doctorName: "Dr. Vagabuno Ribeiro", speciality: "Putinha" },
];

export default function Home() {
  return (
    <View style={GlobalStyle.containerHome}>
      <View style={styles.header}>
        <View style={styles.olaNome}>
          <Text style={styles.textOla}>Olá,</Text>
          <Text style={styles.textOlaNome}>Vitor Santos</Text>
        </View>
        <Image source={require("../../assets/vitor-perfil.png")} />
      </View>

      <SearchBar />
      <ScrollView>
        <View>
          <Image
            style={styles.bannerContainer}
            source={require("./../../assets/banner.png")}
          />
        </View>

        {/* <Line width={320} marginVertical={7} /> */}

        <View style={GlobalStyle.tituloPaginaArea}>
          <Text style={GlobalStyle.tituloPagina}>Consultas agendadas</Text>
        </View>

        <ScrollView style={{ marginTop:20 }}>
          {appointments.map(appointment => (
            <AppointmentCard
              key={appointment.id} 
              day={appointment.day}
              month={appointment.month}
              time={appointment.time}
              doctorName={appointment.doctorName}
              speciality={appointment.speciality}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
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
});