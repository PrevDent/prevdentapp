import { StyleSheet, View } from "react-native";
import Login from "./pages/tela-inicial/login";
import Cadastro from "./pages/tela-inicial/cadastro";
import ButtonLogin from "./Components/common/buttonLogin";
import InputAreaLogin from "./Components/common/inputAreaLogin";
import Home from "./pages/home/home";
import SearchBar from "./Components/common/searchBar";
import AppointmentCard from "./Components/common/appointmentsCard";
import InfoUsuario from "./pages/home/informacoes-usuario/infoUsuario";
import InfoCard from "./Components/common/infoCard";
import RegistryCard from "./Components/common/registryCard";
import PainLevelBar from "./Components/common/painLevelBar";
import NewRegistryScreen from "./pages/home/inserir-registro/newRegistryScreen";
import InputRegistry from "./Components/common/inputRegistry";
import ButtonAddRegistry from "./Components/common/buttonAddRegistry";

export default function App() {
  return (
    <View style={styles.container}>
      {/* SCREENS */}
      {/* <Cadastro /> */}
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <InfoUsuario /> */}
      <NewRegistryScreen />

      {/* COMPONENTS */}
      {/* <ButtonLogin /> */}
      {/* <InputAreaLogin /> */}
      {/* <SearchBar/> */}
      {/* <AppointmentCard
        day="07"
        month="Out"
        time="10:00"
        doctorName="Dr Carlos"
        speciality="Cardiologista"
      /> */}
      {/* <InfoCard
        title="Tipo sanguíneo"
        content="O-"
        icon="water-drop"
        color="#ed7373"
        iconColor="#a00000"
      /> */}
      {/* <RegistryCard/> */}
      {/* <PainLevelBar painLevel={7}/> */}
      {/* <InputRegistry/> */}
      {/* <ButtonAddRegistry/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
