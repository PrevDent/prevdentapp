import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

interface painLevelBarProps {
  painLevel: number; 
}

const painLevelBar = ({ painLevel }: painLevelBarProps) => {
  const progress = Math.min(Math.max(painLevel / 10, 0), 1); 

  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={progress} 
        width={50} 
        height={5} 
        color="#1976D2" 
        unfilledColor="#D3D3D3" 
        borderWidth={0}
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  progressBar: {
    borderRadius: 10, // Bordas arredondadas
  },
});

export default painLevelBar;