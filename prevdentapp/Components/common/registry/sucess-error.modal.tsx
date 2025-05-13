import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

interface ModalFeedbackProps {
  visible: boolean;
  message: string;
  success: boolean;
  onClose: () => void;
}

export function ModalFeedback({
  visible,
  message,
  success,
  onClose,
}: ModalFeedbackProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View
          style={[styles.modalBox, success ? styles.success : styles.error]}
        >
          <Text style={styles.modalText}>{message}</Text>
          <Pressable onPress={onClose} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
  },
  success: {
    borderColor: "#3CB371",
    borderWidth: 2,
  },
  error: {
    borderColor: "#DC143C",
    borderWidth: 2,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "600",
  },
});
