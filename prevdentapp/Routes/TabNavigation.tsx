import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Assumindo que você está usando Expo

import HomeScreen from "../pages/home/home";
import ProfileScreen from "../pages/perfil/profileScreen";
import NewRegistryScreen from "../pages/inserir-registro/newRegistryScreen";
import InfoUsuarioScreen from "../pages/informacoes-usuario/infoUsuario";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Info usuario") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          } else if (route.name === "Novo registro") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#013EB0",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Info usuario"
        component={InfoUsuarioScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Novo registro"
        component={NewRegistryScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
