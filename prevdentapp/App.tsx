import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './Components/context/auth.context';
import AppRoutes from './Routes/AppRoutes';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </AuthProvider>
  );
}
