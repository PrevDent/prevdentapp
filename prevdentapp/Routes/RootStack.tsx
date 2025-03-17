import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/tela-inicial/login";
import CadastroScreen from "../pages/tela-inicial/cadastro";
import HomeScreen from "../pages/home/home";
import InfoUsuarioScreen from "../pages/informacoes-usuario/infoUsuario";
import NewRegistryScreen from "../pages/inserir-registro/newRegistryScreen";

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  InfoUsuario: undefined;
  NewRegistry: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="InfoUsuario" component={InfoUsuarioScreen} />
      <Stack.Screen name="NewRegistry" component={NewRegistryScreen} />
    </Stack.Navigator>
  );
}
