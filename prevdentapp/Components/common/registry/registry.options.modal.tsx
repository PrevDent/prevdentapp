import { Modal, View, Text, StyleSheet } from 'react-native';
import ButtonStandard from '../buttonStandard';

interface RegistryOptionsModalProps {
  visible: boolean;
  onClose: () => void;
  onAddPress: () => void;
}

export const RegistryOptionsModal = ({ visible, onClose, onAddPress }: RegistryOptionsModalProps) => {
  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Deseja inserir um novo registro?</Text>
          <ButtonStandard text="Inserir novo registro" onPress={onAddPress} marginVertical={5} width={200}  />
          <ButtonStandard text="Voltar" onPress={onClose} marginVertical={5} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    width: '75%',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  }
});
