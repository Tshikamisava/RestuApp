import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const data = [
    '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm', '10:00 pm', '10:30 pm',
];

const DinnerTime = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.lunch}>
      <Text style={styles.lunchText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={3} // Set the number of columns in the grid
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  lunch: {
    flex: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#449C97',
    margin: 8,
    borderRadius: 8,
  },
  lunchText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default DinnerTime;
