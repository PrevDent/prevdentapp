import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/tela-inicial/login';
import CadastroScreen from '../pages/tela-inicial/cadastro';
import { RootStackNavigation } from './RootStackNavigation';
import { useAuth } from '../Components/context/auth.context';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const { user, loading } = useAuth();
  console.log('Usuário logado:', user);


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#013EB0" />
      </View>
    );
  }

  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Root" component={RootStackNavigation} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
        </>
      )}

      
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
