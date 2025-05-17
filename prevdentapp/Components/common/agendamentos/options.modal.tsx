import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonStandard from "../buttonStandard";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function OptionsModal({ visible, onClose }: Props) {
  const navigation = useNavigation();

  const handleVoltar = () => {
    onClose();
    navigation.navigate("ScheduleAppointment");
  };

  const handleScheduleAppointment = () => {
    onClose();
    navigation.navigate("MyAppointment");
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
            <Text style={styles.optionText}>
                O que você deseja fazer?
            </Text>
          <ButtonStandard text="Ver todos agendamentos" width={240} onPress={handleScheduleAppointment} />
          <ButtonStandard text="Voltar" onPress={handleVoltar}  marginVertical={5}/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  option: {
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
  },
  cancel: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    marginTop: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
