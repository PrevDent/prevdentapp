import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ExpandableBoxProps {
  title: string;
  additionalDetails: string;
}

const ExpandableBox: React.FC<ExpandableBoxProps> = ({ title, additionalDetails }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => setExpanded(!expanded)}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Icon name={expanded ? "chevron-up" : "chevron-down"} size={24} color="#003366" />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.detailsContainer}>
          <Text style={styles.additionalDetails}>{additionalDetails}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 320,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 10,
  },
  additionalDetails: {
    fontSize: 14,
    color: '#333',
  },
});

export default ExpandableBox;