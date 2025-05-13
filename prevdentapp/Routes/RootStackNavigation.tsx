import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/tela-inicial/login";
import CadastroScreen from "../pages/tela-inicial/cadastro";
import HomeScreen from "../pages/home/home";
import InfoUsuarioScreen from "../pages/usuario/informacoes-usuario/infoUsuario";
import NewRegistryScreen from "../pages/inserir-registro/newRegistryScreen";
import TabNavigator from "./TabNavigation";
import ProfileScreen from "../pages/usuario/perfil/profileScreen";
import UnderConstructionScreen from "../pages/construcao/buildingScreen";
import ActivityAreaScreen from "../pages/info/areas-atuacao/activityAreaScreen";
import InfoConsultaScreen from "../pages/info/infoConsulta";
import AreaDetailsScreen from "../pages/info/areas-atuacao/areaDetailsScreen"
import  MyAppointment from "../pages/meus-agendamentos/MyAppointment";
import ScheduleAppointment from "../pages/meus-agendamentos/ScheduleAppointment";
import { AppointmentInterface } from "../model/appointment.interface";
import { ActivityDataInterface } from "../model/activityData.interface";


export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  InfoUsuario: undefined;
  NewRegistry: undefined;
  TabNavigation: { screen: string } | undefined;
  ProfileScreen: undefined;
  UnderConstructionScreen: undefined;
  ActivityAreaScreen: undefined;
  InfoConsultaScreen: AppointmentInterface;
  AreaDetailsScreen: ActivityDataInterface
  MyAppointment: undefined;
  ScheduleAppointment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TabNavigation" component={TabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="InfoUsuario" component={InfoUsuarioScreen} />
      <Stack.Screen name="NewRegistry" component={NewRegistryScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="UnderConstructionScreen" component={UnderConstructionScreen} />
      <Stack.Screen name="ActivityAreaScreen" component={ActivityAreaScreen} />
      <Stack.Screen name="InfoConsultaScreen" component={InfoConsultaScreen} />
      <Stack.Screen name="AreaDetailsScreen" component={AreaDetailsScreen} />
      <Stack.Screen name="MyAppointment" component={MyAppointment} />
      <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointment} />
      
    </Stack.Navigator>
  );
}
