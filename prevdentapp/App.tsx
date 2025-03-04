import { StyleSheet, View } from 'react-native';
import Login from './pages/tela-inicial/login';
import Cadastro from './pages/tela-inicial/cadastro';
import ButtonLogin from "./Components/common/buttonLogin";


export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro />
      {/* <Login/> */}
      {/* <ButtonLogin /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
