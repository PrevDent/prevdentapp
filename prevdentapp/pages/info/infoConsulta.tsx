import React from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BackArrow from "../../Components/common/backArrowComponent";
import GlobalStyles from "../../Components/styles/Global";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RootStackNavigation";
import { RouteProp } from "@react-navigation/native";
import ExpandableBox from "../../Components/common/ExpandedBox";

type InfoConsultaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "InfoConsultaScreen"
>;
type InfoConsultaScreenRouteProp = RouteProp<
  RootStackParamList,
  "InfoConsultaScreen"
>;

interface Props {
  navigation: InfoConsultaScreenNavigationProp;
  route: InfoConsultaScreenRouteProp;
}

export default function InfoConsultaScreen({ route }: Props) {
  const appointment = route.params;

  const appointmentDate = new Date(appointment.data);
  const day = appointmentDate.getDate().toString().padStart(2, "0");
  const month = (appointmentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = appointmentDate.getFullYear();
  const time = appointmentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const isRealizada = !!appointment.diagnostico;

  return (
    <View style={GlobalStyles.containerHome}>
      <BackArrow />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.pageTitle}>Informações da Consulta</Text>

          <View style={styles.card}>
            <View style={{ marginRight: 20 }}>
              <Icon
                name="person-circle-outline"
                size={50}
                color="#003366"
                style={{ marginBottom: 10 }}
              />
            </View>
            <View>
              <Text style={styles.dentistName}>
                {appointment.dentista.nome}
              </Text>
              <Text style={styles.specialization}>
                {appointment.dentista.especializacao}
              </Text>
              <Text style={styles.treatment}>{appointment.tipoTratamento}</Text>
            </View>
          </View>

          <View
            style={[
              styles.statusContainer,
              { backgroundColor: isRealizada ? "#d4f7dc" : "#fff3cd" },
            ]}
          >
            <Icon
              name={isRealizada ? "checkmark-circle" : "time-outline"}
              size={22}
              color={isRealizada ? "green" : "orange"}
            />
            <Text style={styles.statusText}>
              {isRealizada ? "Consulta realizada" : "Consulta não realizada"}
            </Text>
          </View>

          <ExpandableBox
            title="Motivo da Consulta"
            additionalDetails={
              appointment.tipoTratamento ?? "Motivo não informado pelo paciente"
            }
          />

          <ExpandableBox
            title="Diagnóstico"
            additionalDetails={
              appointment.diagnostico ?? "Diagnóstico não disponível"
            }
          />

          <View style={styles.dateCard}>
            <Text style={styles.dateText}>
              📅 Data: {`${day}/${month}/${year}`}
            </Text>
            <Text style={styles.dateText}>⏰ Horário: {time}</Text>
          </View>

          <View style={styles.footerBox}>
            <Text style={styles.footerTitle}>Precisa de ajuda?</Text>
            <Text style={styles.footerText}>
              Entre em contato com a clínica para remarcar ou tirar dúvidas
              sobre a sua consulta.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 20,
    textAlign: "left",
  },
  card: {
    backgroundColor: "#b1ddff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  dentistName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#002244",
    marginBottom: 5,
  },
  specialization: {
    fontSize: 16,
    color: "#444",
    marginBottom: 10,
  },
  treatment: {
    fontSize: 14,
    color: "#333",
    fontStyle: "italic",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#333",
  },
  dateCard: {
    backgroundColor: "#e6f2ff",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  dateText: {
    fontSize: 15,
    color: "#003366",
    marginBottom: 6,
  },
  footerBox: {
    marginTop: 30,
    backgroundColor: "#f0f4f8",
    padding: 20,
    borderRadius: 12,
    borderColor: "#cce0ff",
    borderWidth: 1,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: "#444",
  },
});
