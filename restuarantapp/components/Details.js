import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Octicons, AntDesign  } from '@expo/vector-icons';

const CardDetails = () => {
  const [guestCount, setGuestCount] = useState(1);
  const [isHearted, setIsHearted] = useState(false);
  const [cart, setCart] = useState([]);

  const incrementGuestCount = () => {
    setGuestCount(guestCount + 1);
  };

  const decrementGuestCount = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  const toggleHeart = () => {
    setIsHearted(!isHearted);
    if (!isHearted) {
      setCart([...cart, { name: 'Leicester Square Kitchen', guestCount }]);
    }
  };

  const generateTimeSlots = (timeSlotArray) => {
    return timeSlotArray.map((time, index) => (
      <TouchableOpacity key={index} style={styles.timeSlot}>
        <Text style={styles.timeText}>{time}</Text>
      </TouchableOpacity>
    ));
  };

  const generateLunchTimeSlots = () => {
    const lunchTimeSlots = [
      '1:00 pm',
      '1:30 pm',
      '2:00 pm',
      '2:30 pm',
      '3:00 pm',
      '3:30 pm',
      '4:00 pm',
      '4:30 pm',
      '5:30 pm',
    ];

    return (
      <View style={styles.timeContainer}>
        <View style={styles.timeColumn}>
          {generateTimeSlots(lunchTimeSlots.slice(0, 3))}
        </View>
        <View style={styles.timeColumn}>
          {generateTimeSlots(lunchTimeSlots.slice(3, 6))}
        </View>
        <View style={styles.timeColumn}>
          {generateTimeSlots(lunchTimeSlots.slice(6, 9))}
        </View>
      </View>
    );
  };

  const generateDinnerTimeSlots = () => {
    const dinnerTimeSlots = [
      '6:00 pm',
      '6:30 pm',
      '7:00 pm',
      '7:30 pm',
      '8:00 pm',
      '8:30 pm',
      '9:00 pm',
      '9:30 pm',
      '10:00 pm',
      '10:30 pm',
      '11:00 pm',
      '11:30 pm',
    ];

    return (
      <View style={styles.timeContainer}>
        <View style={styles.timeColumn}>
          {generateTimeSlots(dinnerTimeSlots.slice(0, 3))}
        </View>
        <View style={styles.timeColumn}>
          {generateTimeSlots(dinnerTimeSlots.slice(3, 6))}
        </View>
        <View style={styles.timeColumn}>
          {generateTimeSlots(dinnerTimeSlots.slice(6, 9))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={require('../assets/Restaurant1.jpg')} style={styles.cardImage} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle the button press action here
          }}
        >
          <Icon name="cutlery" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>View Menu</Text>
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <View style={styles.nameAndRatingContainer}>
            <Text style={styles.restaurantName}>Leicester Square Kitchen</Text>
            <TouchableOpacity style={styles.heartButton} onPress={toggleHeart}>
              <Icon
                name={isHearted ? 'heart' : 'heart-o'}
                size={20}
                color={isHearted ? 'red' : '#FF5733'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>31-36 Leicester Square, Midrand</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.shareButton}
                onPress={() => {
                  // Handle the Share button press action here
                }}
              >
              <Octicons name="share" size={20} color="grey" />
              <Text style={styles.shareText}>share</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.favourateButton}
                onPress={() => {
                  // Handle the Share button press action here
                }}
              >
           <AntDesign name="hearto" size={20} color="grey" />
              <Text style={styles.shareText}>share</Text>
              </TouchableOpacity>
              
            </View>
          </View>
          <View style={styles.guestContainer}>
            <View style={styles.guestTextContainer}>
              <Text style={styles.guestText}>Guest: {guestCount}</Text>
            </View>
            <View style={styles.guestOptionsContainer}>
              <TouchableOpacity style={styles.guestOptionButton} onPress={incrementGuestCount}>
                <Icon name="caret-up" size={20} color="#459C97" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.guestOptionButton} onPress={decrementGuestCount}>
                <Icon name="caret-down" size={20} color="#459C97" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeHeading}>Lunch Time</Text>
            {generateLunchTimeSlots()}
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeHeading}>Dinner Time</Text>
            {generateDinnerTimeSlots()}
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeading}>About Leicester Square Kitchen</Text>
          <Text style={styles.aboutText}>
            Leicester Square Kitchen introduces a Mexican and Peruvian dining experience serving small plates and innovative cocktails. From exquisite tacos to fine skewered meats from the Peruvian barbecue, the menu takes diners on a journey through the unique flavors of South America.
          </Text>
        </View>
      </View>
      <Image style={styles.mapImage} />
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  card: {
    width: '100%', // Adjust the width to fit the screen
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 25,
    flexDirection: 'column',
  },
  cardImage: {
    width: '100%',
    height: Dimensions.get('window').width * 0.5, 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#459C97',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  nameAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: 12,
    color: 'grey',
    marginTop: -8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    padding: 10,
    width: 100,
    marginRight: 10,
    top: 30,
    right: 180,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareText: {
    right: -5,
    color: 'grey',
  },
  // loveButton: {
  //   padding: 10,
  // },
  guestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    top: 20,
  },
  guestTextContainer: {
    padding: 10,
  },
  guestText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#459C97',
  },
  guestOptionsContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  guestOptionButton: {
    padding: 10,
  },
  timeHeading: {
    fontFamily: 'Sora',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21.6,
    color: '#646464'
  },
  aboutContainer: {
    padding: 20,
  },
  aboutHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: 'grey',
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  timeSlot: {
    width: 100,
    margin: 5, 
    height: 40,
    backgroundColor: '#459C97',
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  mapImage: {
    width: '100%',
    height: Dimensions.get('window').width * 0.7, // Adjust the height based on screen width
  },
});

export default CardDetails;
