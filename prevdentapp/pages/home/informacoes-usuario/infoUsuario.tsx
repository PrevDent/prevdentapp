import { ScrollView, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../../Components/styles/Global";
import InfoCard from "../../../Components/common/infoCard";
import Line from "../../../Components/common/line";
import RegistryCard from "../../../Components/common/registryCard";

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

const userregistrys = [
  { id: 1, title: "Dor na gengiva", icon: "sick", scale: 6 },
  { id: 2, title: "Dor de dente", icon: "sick", scale: 7 },
  { id: 3, title: "Mau Hálito", icon: "sick", scale: 4 },
];

export default function InfoUsuario() {
  return (
    <View style={GlobalStyles.containerHome}>
      <ScrollView>
        <View
          style={{ ...GlobalStyles.tituloPaginaArea, marginHorizontal: "8%" }}
        >
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

        <Line marginVertical={20} />

        <View
          style={{ ...GlobalStyles.tituloPaginaArea, marginHorizontal: "8%" }}
        >
          <Text style={GlobalStyles.tituloPagina}>Últimos Registros</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          {userregistrys.map((userregistry) => (
            <RegistryCard
              key={userregistry.id}
              title={userregistry.title}
              icon={userregistry.icon}
              scale={userregistry.scale}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
