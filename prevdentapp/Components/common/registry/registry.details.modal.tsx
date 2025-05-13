import { Modal, View, Text, StyleSheet } from 'react-native';
import ButtonStandard from '../buttonStandard';
import { RegistroInterface } from '../../../model/registro.interface';

interface RegistroDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  registro: RegistroInterface;
}

export const RegistroDetailsModal = ({ visible, onClose, registro }: RegistroDetailsModalProps) => {
  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalhes do Registro</Text>
          <Text style={styles.modalDescription}><Text style={styles.bold}>Tipo:</Text> {registro.tipo}</Text>
          <Text style={styles.modalDescription}><Text style={styles.bold}>Ocorrência:</Text> {registro.ocorrencia}</Text>
          <Text style={styles.modalDescription}><Text style={styles.bold}>Intensidade:</Text> {registro.intensidade}</Text>
          <Text style={styles.modalDescription}><Text style={styles.bold}>Informações adicionais:</Text> {registro.informacoes_adicionais}</Text>

          <View style={{alignItems: 'center' }}>
            <ButtonStandard text="Fechar" onPress={onClose} marginVertical={10} />
          </View>
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
    padding: 20,
    width: '85%',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  modalDescription: {
    fontSize: 16,
    marginVertical: 4
  },
  bold: {
    fontWeight: 'bold'
  }
});
