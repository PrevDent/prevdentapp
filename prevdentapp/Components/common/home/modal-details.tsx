import { Modal, View, Text, StyleSheet } from 'react-native';

import ButtonStandard from '../buttonStandard';
import BackArrow from '../backArrowComponent';
import { useNavigation } from '@react-navigation/native';
import { AppointmentInterface } from '../../../model/appointment.interface';


interface DetailsModalProps {
  visible: boolean;
  onClose: () => void;
  appointment: AppointmentInterface;
}

export const DetailsModal = ({ visible, onClose, appointment }: DetailsModalProps) => { 
    
  const navigation = useNavigation();
  
  const handleInfoConsulta = () => {
    navigation.navigate('InfoConsultaScreen', { ...appointment });
    onClose();
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <BackArrow/>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Ver Detalhes</Text>
          <View style={styles.modalContent}>
            <Text style={styles.modalDescription}><Text style={styles.modalDescriptionText}>Especialidade:</Text> {appointment.dentista.especializacao}</Text>
            <Text style={styles.modalDescription}><Text style={styles.modalDescriptionText}>Descrição: </Text> {appointment.tipoTratamento}</Text>
          </View>
          <ButtonStandard text='Ir para detalhes' onPress={handleInfoConsulta} marginVertical={2} />
          <ButtonStandard text="voltar" onPress={onClose} marginVertical={10} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalContent:{
    marginTop: 10,
    textAlign: 'left',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalDescription: {
    marginVertical: 10,
    fontSize: 16,
  },
  modalDescriptionText:{
    fontWeight: 'bold',
    
  }
});

export default DetailsModal;