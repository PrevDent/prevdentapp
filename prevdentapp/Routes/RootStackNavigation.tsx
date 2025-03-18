import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/tela-inicial/login";
import CadastroScreen from "../pages/tela-inicial/cadastro";
import HomeScreen from "../pages/home/home";
import InfoUsuarioScreen from "../pages/informacoes-usuario/infoUsuario";
import NewRegistryScreen from "../pages/inserir-registro/newRegistryScreen";
import TabNavigator from "./TabNavigation";
import ProfileScreen from "../pages/perfil/profileScreen";
import UnderConstructionScreen from "../pages/construcao/buildingScreen";

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  InfoUsuario: undefined;
  NewRegistry: undefined;
  TabNavigation: undefined;
  ProfileScreen: undefined;
  UnderConstructionScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
      
    </Stack.Navigator>
  );
}
