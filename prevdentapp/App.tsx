import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStackNavigation } from "./Routes/RootStackNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </>
  );
}
