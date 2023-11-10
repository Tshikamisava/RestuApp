import { Text, SafeAreaView, StyleSheet } from 'react-native';
import About from './components/About';
import Menu from './components/Menu';
import Home from './components/Home';
import Restaurent from './components/Restuarent';
import Details from './components/Details';
import Reservation from './components/Reservation';
import SingUp from './components/SignUp';
import UserRegistration from './components/SignUp';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Details />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});
