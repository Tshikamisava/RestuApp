import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

const menuItems = [
  {
    id: 1,
    title: 'Pizza',
    description: 'Delicious pizza with your choice of toppings',
  },
  {
    id: 2,
    title: 'Burger',
    description: 'Juicy burger with fries and a drink',
  },
  {
    id: 3,
    title: 'Salad',
    description: 'Fresh salad with your choice of dressing',
  },
  {
    id: 4,
    title: 'Pasta',
    description: 'Homemade pasta with your choice of sauce',
  },
  {
    id: 4,
    title: 'Pasta',
    description: 'Homemade pasta with your choice of sauce',
  },
  {
    id: 4,
    title: 'Pasta',
    description: 'Homemade pasta with your choice of sauce',
  },
];

const Menu = () => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <Card style={styles.cardTop}>
        <Image
          source={require('../assets/Restaurant1.jpg')}
       style={styles.cardImage}/>
        <Text style={styles.CardAside}>Leceister Square kitchen</Text>
       <Icon name="map-marker" color="grey" size={16} style={styles.locationIcon} />
        <Text style={styles.Address}>31-36 Leicester Square, Midrand</Text>
        <Icon name="users" size={15} color="grey"  style={styles.guestUsers}/>
        <Text style={styles.guest}>2 Guest </Text>
      </Card>

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

      <View style={styles.bottomNavBar}>
          <Icon name="home" color="white" size={24} />
          <Icon name="bell" color="white" size={24} />
          <Icon name="heart" color="white" size={24} />
          <Icon name="user" color="white" size={24} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  card: {
    bottom: -70,
    margin: 8,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 118,
    height: 150,
    flexShrink: 0,
    top: 50,
    right: -5,
  },
  cardTop: {
    width: 370,
    height: 220,
    flexShrink: 0,
    background: '#FDFDFD',
    top: 30,

    
  },
  CardAside: {
    color: '#000',
    fontFamily: 'Sora',
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 23,
    top: -100,
    right: -140,
  },
  locationIcon: {
  width: 16,
  height: 16,
  flexShrink: 0,
  top: -82,
  right: -130,
},

  Address: {
    color: '#646464',
    textAlign: 'center',
    fontFamily: 'Nunito',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    right: -75,
    top: -100,
  },
  guest: {
    right: -160,
    top: -45,
    fontWeight: 600,
  },
  guestUsers: {
    top: -30,
    right: -130,
  },
  bottomNavBar: {
    backgroundColor: '#459C97',
    width: 360,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 24,
    position: 'absolute',
    bottom: -5,
    left: 18,
  },
  
});

export default Menu;
