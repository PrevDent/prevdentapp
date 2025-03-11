import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../../Components/styles/Global";
import InfoCard from "../../../Components/common/infoCard";

const userinfo = [
  {
    id: 1,
    title: "Tipo Sanguíneo",
    value: "O-",
    icon: "favorite",
    color: "#F8BBD0",
    iconColor: "#D81B60",
  }, 
  {
    id: 2,
    title: "Idade",
    value: "4 anos",
    icon: "child-care",
    color: "#C8E6C9",
    iconColor: "#43A047",
  }, 
  {
    id: 3,
    title: "Altura",
    value: "1.10m",
    icon: "height",
    color: "#BBDEFB",
    iconColor: "#1976D2",
  }, 
  {
    id: 4,
    title: "Peso",
    value: "18 kg",
    icon: "cake",
    color: "#FFF9C4",
    iconColor: "#FBC02D",
  }, 
];

export default function InfoUsuario() {
  return (
    <View style={GlobalStyles.containerHome}>
      <View style={GlobalStyles.tituloPaginaArea}>
        <Text style={GlobalStyles.tituloPagina}>Informações do usuário</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {userinfo.map((userinfo) => (
          <InfoCard
            key={userinfo.id}
            title={userinfo.title}
            content={userinfo.value}
            icon={userinfo.icon}
            color={userinfo.color}
            iconColor={userinfo.iconColor}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
