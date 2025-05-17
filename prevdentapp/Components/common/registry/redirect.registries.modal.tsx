import { Modal, View, Text, StyleSheet } from 'react-native';
import ButtonStandard from './../buttonStandard'
import { useNavigation } from '@react-navigation/native';

interface ModalSeeAllRegistriesProps {
  visible: boolean;
  onNavigate: () => void;
  onClose: () => void;
}

export function ModalAllRegistries({ visible, onClose, onNavigate}: ModalSeeAllRegistriesProps) {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('InfoUsuario');
    onClose();
  };

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Quer ver todos os seus registros?</Text>
          <ButtonStandard text="Ir para registros" onPress={handleNavigate} marginVertical={10} />
          <ButtonStandard text="Voltar" onPress={onClose} marginVertical={2} />
        </View>
      </View>
    </Modal>
  );
}

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
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
});
