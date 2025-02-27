import { StyleSheet, View } from 'react-native';

const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
    line: {
      borderBottomColor: 'red', 
      borderBottomWidth: 2,
      marginVertical: 20,
      width: '80%',
      alignSelf: 'center',
    },
  });

export default Line;