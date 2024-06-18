import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { hp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import { useRouter } from "expo-router";
import OTPTextInput from "react-native-otp-textinput";
import SafeViewAndroid from "../../components/SafeAreaView";

const VerifyPasswordReset = () => {
  const router = useRouter();

  clearText = () => {
    this.otpInput.clear();
  };

  setText = () => {
    this.otpInput.setValue("1234");
  };

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={theme.colors.neutral(0.8)}
          />
        </Pressable>
        <View>
          <Text style={styles.headingText}>Verify Reset Code!</Text>
          <Text
            style={{
              color: theme.colors.neutral(0.5),
              marginTop: 5,
              fontSize: 16,
            }}
          >
            Enter your verfication code.
          </Text>
        </View>
        <View style={styles.content}>
          <View>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                color: theme.colors.neutral(0.7),
                fontWeight: "600",
              }}
            >
              Verification Code
            </Text>
            <View>
              <OTPTextInput
                tintColor={theme.colors.primary}
                offTintColor={theme.colors.neutral(0.2)}
                ref={(e) => (this.otpInput = e)}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push("auth/login")}
            style={styles.login}
          >
            <Text style={styles.logintext}>Verify Code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default VerifyPasswordReset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  headingText: {
    fontSize: hp(3),
    fontWeight: theme.fontWeights.semibold,
    marginTop: 30,
  },

  formInput: {
    padding: 16,
    paddingVertical: 20,
    borderColor: theme.colors.neutral(0.4),
    borderWidth: 1,
    borderRadius: 6,
  },

  content: {
    flex: 1,
    marginTop: 40,
    gap: 28,
  },

  login: {
    padding: 18,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#FF6347",
  },

  logintext: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
