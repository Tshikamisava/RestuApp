import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const data = [
    '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm',  '5:30 pm',
    ];

const LunchTime = () => {
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

export default LunchTime;