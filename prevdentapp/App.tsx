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

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Cadastro /> */}
      {/* <Login/> */}
      {/* <ButtonLogin /> */}
      {/* <InputAreaLogin /> */}
      {/* <Home/> */}
      {/* <SearchBar/> */}
      {/* <AppointmentCard
        day="07"
        month="Out"
        time="10:00"
        doctorName="Dr Carlos"
        speciality="Cardiologista"
      /> */}
      {/* <InfoUsuario/> */}
      {/* <InfoCard
        title="Tipo sanguíneo"
        content="O-"
        icon="water-drop"
        color="#ed7373"
        iconColor="#a00000"
      /> */}
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
