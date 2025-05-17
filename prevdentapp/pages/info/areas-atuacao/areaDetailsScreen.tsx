import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import BackArrow from "../../../Components/common/backArrowComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Routes/RootStackNavigation";
import { RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type AreaDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AreaDetailsScreen"
>;

type AreaDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "AreaDetailsScreen"
>;

interface Props {
  navigation: AreaDetailsScreenNavigationProp;
  route: AreaDetailsScreenRouteProp;
}

export default function AreaDetailsScreen({ route }: Props) {
  const activity = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <BackArrow />
        <View style={styles.header}>
          <View
            style={[
              styles.iconBackground,
              { backgroundColor: activity.iconBackgroundColor },
            ]}
          >
            <Ionicons
              name={activity.icon as keyof typeof Ionicons.glyphMap}
              size={36}
              color="#fff"
            />
          </View>
          <Text style={styles.title}>{activity.title}</Text>
          <Text style={styles.description}>{activity.description}</Text>
        </View>

        <TouchableOpacity
          style={styles.accordion}
          onPress={() => toggleSection("details")}
        >
          <View style={styles.accordionFlex}>
            <Text style={styles.accordionTitle}>📋 Sobre a especialidade</Text>
            <Ionicons name="chevron-down" size={20} color="#003366" style={{ marginLeft: 10 }}/>
          </View>
          {expandedSection === "details" && (
            <Text style={styles.accordionContent}>{activity.details}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.accordion}
          onPress={() => toggleSection("indications")}
        >
          <View style={styles.accordionFlex}>
            <Text style={styles.accordionTitle}>🧭 Indicações</Text>
            <Ionicons name="chevron-down" size={20} color="#003366" style={{ marginLeft: 10 }}/>
          </View>

          {expandedSection === "indications" && (
            <Text style={styles.accordionContent}>{activity.indications}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.accordion}
          onPress={() => toggleSection("treatment")}
        >
          <View style={styles.accordionFlex}>
            <Text style={styles.accordionTitle}>🦷 Tratamento</Text>
            <Ionicons name="chevron-down" size={20} color="#003366" style={{ marginLeft: 10 }}/>
          </View>

          {expandedSection === "treatment" && (
            <Text style={styles.accordionContent}>{activity.treatment}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.accordion}
          onPress={() => toggleSection("diagnosis")}
        >
          <View style={styles.accordionFlex}>
            <Text style={styles.accordionTitle}>🔬 Diagnóstico</Text>
            <Ionicons name="chevron-down" size={20} color="#003366" style={{ marginLeft: 10 }}/>
          </View>

          {expandedSection === "diagnosis" && (
            <Text style={styles.accordionContent}>{activity.diagnosis}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.accordion}
          onPress={() => toggleSection("recommendations")}
        >
          <View style={styles.accordionFlex}>
            <Text style={styles.accordionTitle}>📌 Recomendações</Text>
            <Ionicons name="chevron-down" size={20} color="#003366" style={{ marginLeft: 10 }}/>
          </View>

          {expandedSection === "recommendations" && (
            <Text style={styles.accordionContent}>
              {activity.recommendations}
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => setModalVisible(true)}
        >
          <View style={styles.accordionFlex}>
            <Text style={styles.modalButtonText}>
              📋 Ver procedimentos comuns
            </Text>
            <Ionicons name="chevron-down" size={20} color="#fff" style={{ marginLeft: 10 }}/>
          </View>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Procedimentos comuns</Text>
              <Text style={styles.modalText}>{activity.procedures}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  iconBackground: {
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#003366",
  },
  description: {
    textAlign: "center",
    marginTop: 8,
    color: "#555",
  },
  accordion: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  accordionFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#003366",
  },
  accordionContent: {
    marginTop: 10,
    fontSize: 14,
    color: "#444",
  },
  modalButton: {
    backgroundColor: "#003366",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#003366",
  },
  modalText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#003366",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
