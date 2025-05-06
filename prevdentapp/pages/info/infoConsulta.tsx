import BackArrow from "../../Components/common/backArrowComponent";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import GlobalStyles from "../../Components/styles/Global";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RootStackNavigation";
import { RouteProp } from "@react-navigation/native";
import ExpandableBox from "../../Components/common/ExpandedBox";
import Icon from "react-native-vector-icons/Ionicons"; 

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

export default function InfoConsultaScreen({ navigation, route }: Props) {
  const appointment = route.params;

  const appointmentDate = new Date(appointment.data);
  const day = appointmentDate.getDate();
  const month = appointmentDate.getMonth() + 1; 
  const year = appointmentDate.getFullYear();
  const time = appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={GlobalStyles.containerHome}>
      <BackArrow />
      <ScrollView>
        <View style={{ width: "80%" }}>
          <View style={GlobalStyles.tituloPaginaArea}>
            <Text style={GlobalStyles.tituloPagina}>Informações da Consulta</Text>
          </View>

          <View style={styles.containerDoctor}>
            <View style={styles.boxDoctor}>
              <Text style={styles.doctorName}>{appointment.dentista.nome}</Text>
              <Text style={styles.speciality}>{appointment.dentista.especializacao}</Text>
              <Text style={styles.description}>{appointment.tipoTratamento}</Text>
            </View>
          </View>

          {appointment.diagnostico ? (
            <View style={styles.containerConsultationStatus}>
              <Icon name="checkmark-circle" size={20} color="green" />
              <Text style={styles.consultationText}> Consulta realizada  </Text>
            </View>
            ) : (
                <View style={styles.containerConsultationStatus}>
                  <Icon name="time-outline" size={20} color="orange" />
                  <Text style={styles.consultationText}> Consulta não realizada   </Text>
                </View>
              )}

          <ExpandableBox
            title="Diagnóstico"
            additionalDetails={appointment.diagnostico ?? "Diagnóstico não disponível"}
          />

          <View style={styles.containerDoctor}>
            <View style={styles.boxDoctor}>
              <View style={styles.containerDateTime}>
                <Text style={styles.consultationText}>{`Data: ${day}/${month}/${year}`}</Text>
                <Text style={styles.consultationText}>{`Horário: ${time}`}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDoctor: {
    justifyContent: "center",
    width: 320,
  },
  boxDoctor: {
    backgroundColor: "#b1ddff",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  speciality: {
    fontSize: 16,
    color: "#555",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginTop: 10,
  },
  containerDateTime: {
    alignItems: "flex-start",
  },
  containerConsultationStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  consultationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});