import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Image as SvgImage } from "react-native-svg";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Home() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <View>
        <svg xmlns="http://www.w3.org/2000/svg" width="171" height="60" viewBox="0 0 171 60" fill="none">
  <circle cx="85.6685" cy="-25.3315" r="84.8476" transform="rotate(148.518 85.6685 -25.3315)" fill="url(#paint0_linear_13_626)"/>
  <defs>
    <linearGradient id="paint0_linear_13_626" x1="172.825" y1="-278.397" x2="85.6685" y2="59.5161" gradientUnits="userSpaceOnUse">
      <stop stop-color="#62BCB7"/>
      <stop offset="1" stop-color="#62BCB7" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>

        </View>

      <View style={styles.avater1}>
        <Image source={require("../assets/Ellipse.svg")} style={styles.logo1} />
      </View>
      <View style={styles.connect}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="80"
          viewBox="0 0 62 80"
          fill="none"
        >
          <path
            d="M0.999984 0.5C-0.500016 23.5 9.39999 71.5 61 79.5"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="9 9"
          />
        </svg>
      </View>
      <View style={styles.avater2}>
        <Image
          source={require("../assets/Ellipse2.svg")}
          style={styles.logo2}
        />
      </View>
      <View style={styles.connect1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="62"
          viewBox="0 0 39 62"
          fill="none"
        >
          <path
            d="M38.5001 1C20 9 0.60007 22.7 1.00007 61.5"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="9 9"
          />
        </svg>
      </View>
      <View style={styles.avater3}>
        <Image source={require("../assets/Ellipse.svg")} style={styles.logo3} />
      </View>
      <View style={styles.connect2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="75"
          viewBox="0 0 24 75"
          fill="none"
        >
          <path
            d="M21 74C27.5 51 20.9 14.1 0.500031 0.5"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="9 9"
          />
        </svg>
      </View>
      <View style={styles.avater4}>
        <Image source={require("../assets/tray_1.png")} style={styles.logo4} />
      </View>

      <Text style={styles.homeText}>Dine With Your Friends</Text>

      <p style={styles.para}>easier with no ads and no call time limit</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="73"
        height="8"
        viewBox="0 0 73 8"
        fill="none"
      >
        <rect x="16" width="40" height="8" rx="4" fill="white" />
        <rect width="8" height="8" rx="4" fill="white" fill-opacity="0.4" />
        <rect
          x="65"
          width="8"
          height="8"
          rx="4"
          fill="white"
          fill-opacity="0.4"
        />
      </svg>

      <TouchableOpacity className="btn btn-warning" style={styles.next}>
        Next
      </TouchableOpacity>

      <svg
        width="135"
        height="5"
        viewBox="0 0 135 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="135" height="5" rx="2.5" fill="white" />
      </svg>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#459C97",
    alignItems: "center",
    justifyContent: "center",
    width: 379,
    height: 840,
  },
  avater1: {
    width: 65,
    height: 65,
    borderRadius: 32.25,
    backgroundColor: "#fff",
    bottom: -70,
    right: 130,
  },
  avater2: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    bottom: -180,
    right: 10,
  },
  avater3: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    bottom: 170,
    left: 100,
  },
  avater4: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: "#fff",
    bottom: 250,
    right: 30,
  },
  logo1: {
    width: 60,
    height: 60,
    right: -2,
    top: 3,
  },
  connect: {
    top: 70,
    right: 100,
  },
  logo2: {
    width: 75,
    height: 75,
    right: -3,
    top: 3,
  },
  logo3: {
    width: 75,
    height: 75,
    right: -3,
    top: 3,
  },
  connect1: {
    top: -70,
    left: 40,
  },
  logo4: {
    width: 60,
    height: 60,
    right: -4,
    top: 3,
  },
  connect2: {
    top: -90,
    left: 20,
  },

  homeText: {
    width: 258,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Rubik",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
  },
  para: {
    width: 211,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Rubik",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    opacity: 0.8,
  },
  next: {
   
  },
});
