import BackArrow from "../../Components/common/backArrowComponent";
import { Text, View, ScrollView, StyleSheet } from "react-native";
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

export default function InfoConsultaScreen({ navigation, route }: Props) {
  const appointment = route.params;

  return (
    <View style={GlobalStyles.containerHome}>
      <BackArrow />
      <ScrollView>
        <View style={{ width: "80%" }}>
          <View style={GlobalStyles.tituloPaginaArea}>
            <Text style={GlobalStyles.tituloPagina}>Informações</Text>
          </View>

          <View style={styles.containerDoctor}>
            <View style={styles.boxDoctor}>
              <Text
                style={styles.doctorName}
              >{`${appointment.doctorName}`}</Text>
              <Text
                style={styles.speciality}
              >{`${appointment.speciality}`}</Text>
              <Text
                style={styles.description}
              >{`${appointment.description}`}</Text>
            </View>
          </View>

          <View>
            <Text>Consulta Realizada</Text>
          </View>

          <ExpandableBox
            title="Diagnóstico"
            additionalDetails={appointment.description}
          />

          <View style={styles.containerDoctor}>
            <View style={styles.boxDoctor}>
              <View style={styles.containerDateTime}>
                <Text>{`Data: ${appointment.day} ${appointment.month}`}</Text>
                <Text>{`Horário: ${appointment.time}`}</Text>
              </View>

              <Text>{`Endereço: ${appointment.description}`}</Text>
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
  }
});
