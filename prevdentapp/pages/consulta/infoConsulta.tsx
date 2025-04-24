import BackArrow from "../../Components/common/backArrowComponent";
import { Text, View } from "react-native";
import GlobalStyles from "../../Components/styles/Global";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RootStackNavigation";
import { RouteProp } from '@react-navigation/native';

type InfoConsultaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'InfoConsultaScreen'>;
type InfoConsultaScreenRouteProp = RouteProp<RootStackParamList, 'InfoConsultaScreen'>;

interface Props {
  navigation: InfoConsultaScreenNavigationProp;
  route: InfoConsultaScreenRouteProp;
}

export default function InfoConsultaScreen({ navigation, route }: Props) {
  const appointment = route.params;

  return (
    <View style={GlobalStyles.containerHome}>
      <BackArrow />
      <View style={{ width: "80%" }}>
        <View style={GlobalStyles.tituloPaginaArea}>
          <Text style={GlobalStyles.tituloPagina}>Informações</Text>
        </View>
        <Text>{`Consulta com ${appointment.doctorName}`}</Text>
        <Text>{`Especialidade: ${appointment.speciality}`}</Text>
        <Text>{`Data: ${appointment.day} ${appointment.month}`}</Text>
        <Text>{`Horário: ${appointment.time}`}</Text>
        <Text>{`Descrição: ${appointment.description}`}</Text>
      </View>
    </View>
  );
}