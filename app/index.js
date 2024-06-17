import {
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../assets/images/side-view-radio-microphone-with-copy-space.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.headingText}>
            Headlines and Tales at Your Fingertips
          </Text>
          <TouchableOpacity
            onPress={() => router.push("auth/login")}
            style={styles.login}
          >
            <Text style={styles.logintext}>CONTINUE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("auth/create-account")}
            style={styles.register}
          >
            <Text style={styles.registerText}>Create an account.</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 0,
    width: wp(100),
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    gap: 32,
    position: "absolute",
    bottom: 50,
  },

  logo: {
    position: "absolute",
    top: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    color: theme.colors.white,
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    textAlign: "center",
  },

  login: {
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#FF6347",
  },

  register: {
    backgroundColor: "transparent",
    alignItems: "center",
  },

  logintext: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: "600",
  },

  registerText: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: "600",
  },

  headingText: {
    color: theme.colors.white,
    fontSize: 52,
    fontWeight: "300",
    textAlign: "left",
    marginBottom: 60,
  },
});
