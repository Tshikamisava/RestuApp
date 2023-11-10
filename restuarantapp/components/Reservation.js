import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

const Reservation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('');
  const [request, setRequest] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const handleTermsChecked = () => {
    setTermsChecked(!termsChecked);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Reservation</Text>

        <View style={styles.cardTop}>
          <Image
            source={require('../assets/Restaurant1.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.CardAside}>Leicester Square Kitchen</Text>
          <Icon
            name="map-marker"
            color="grey"
            size={16}
            style={styles.locationIcon}
          />
          <Text style={styles.Address}>31-36 Leicester Square, Midrand</Text>
          <Icon name="users" size={15} color="grey" style={styles.guestUsers} />
          <Text style={styles.guest}>2 Guests</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.label}>Email Address:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.label}>Select an Occasion (optional):</Text>
          <TextInput
            style={styles.input}
            value={occasion}
            onChangeText={(text) => setOccasion(text)}
          />
          <Text style={styles.label}>Add a Special Request (optional):</Text>
          <TextInput
            style={styles.input}
            value={request}
            onChangeText={(text) => setRequest(text)}
            multiline={true}
            numberOfLines={4}
          />
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={handleTermsChecked}>
              {termsChecked && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              I agree to the Terms and Conditions
            </Text>
          </View>
          <TouchableOpacity
            style={styles.bottomNavBar}
            onPress={handleSubmit}
            disabled={!termsChecked}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  scrollContainer: {
    flexGrow: 1,
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
    backgroundColor: '#FDFDFD',
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
    fontWeight: '600',
  },
  guestUsers: {
    top: -30,
    right: -130,
  },
  form: {
    width: 260,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    top: 30,
    left: 50,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    left: -15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#459C97',
    borderRadius: 4,
    marginBottom: 10,
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 16,
    color: '#459C97',
  },
  checkboxLabel: {
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
    bottomNavBar: {
    backgroundColor: '#459C97',
    width: 361.14,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 24,
    position: 'absolute',
    bottom: -60,
    left: -50,
  },
});

export default Reservation;
