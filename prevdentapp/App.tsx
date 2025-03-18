import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStackNavigation } from "./Routes/RootStackNavigation";
import TabNavigator from "./Routes/TabNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </>
  );
}
