import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../../Components/styles/Global";
import InfoCard from "../../../Components/common/infoCard";
import Line from "../../../Components/common/line";
import RegistryCard from "../../../Components/common/registryCard";
import BackArrow from "../../../Components/common/backArrowComponent";
import { registroController } from "../../../Components/controller/api.controller";
import { useAuth } from "../../../Components/context/auth.context";
import { useEffect, useState } from "react";
import { RegistroInterface } from "../../../model/registro.interface";
import { RegistroDetailsModal } from "../../../Components/common/registry/registry.details.modal";
import { RegistryOptionsModal } from "../../../Components/common/registry/registry.options.modal";
import { useNavigation } from "@react-navigation/native";
import { TabRoutes } from "../../../model/tab.routes.enum";

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

export default function InfoUsuarioScreen() {
  const { user } = useAuth();
  const [infoRegistry, setInfoRegistry] = useState<RegistroInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedRegistro, setSelectedRegistro] = useState<RegistroInterface | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const navigation = useNavigation();



  const fetchMeusRegistros = async () => {
      try {
        const registroData = await registroController.fetchRegistro(user?.token || "");
        setInfoRegistry(registroData);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar os registros.");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchMeusRegistros();
    }, []);

    if (loading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#013EB0" />
          <Text>Carregando registros...</Text>
        </View>
      );
    }
  
   if (error) {
      return (
        <View style={styles.centered}>
          <Text style={{ color: "red" }}>{error}</Text>
        </View>
      );
    }

  return (
    <View style={GlobalStyles.containerHome}>
      <BackArrow />
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

          {infoRegistry.map((registro) => (
            <RegistryCard
              key={registro.idRegistro}
              title={registro.tipo}
              icon="sick"
              scale={parseInt(registro.intensidade.toString())}
              onPress={() => {
                setSelectedRegistro(registro);
                setShowDetailsModal(true);
              }}
              onOptionsPress={() => {
                setShowOptionsModal(true);
                setSelectedRegistro(registro);
              }}
            />
          ))}


        </View>
      </ScrollView>
      {selectedRegistro && (
          <RegistroDetailsModal
            visible={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            registro={selectedRegistro}
          />
        )}

        <RegistryOptionsModal
          visible={showOptionsModal}
          onClose={() => setShowOptionsModal(false)}
          onAddPress={() => {
            setShowOptionsModal(false);
            navigation.navigate("TabNavigation", {
              screen: TabRoutes.NovoRegistro});
          }}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
});
