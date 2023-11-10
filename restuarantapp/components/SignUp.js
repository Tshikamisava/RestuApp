import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    if (!username || !email) {
      Alert.alert('Error', 'Please fill in both username and email.');
      return;
    }

    // Handle the registration logic here without the database

    // For example, you can display a success message
    Alert.alert('Success', 'User registered successfully');
  };

  return (
    <View>
      <Text>Registration</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default SignUp;
