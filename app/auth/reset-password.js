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
import SafeViewAndroid from "../../components/SafeAreaView";

const ResetPassword = () => {
  const router = useRouter();
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
          <Text style={styles.headingText}>Enter new Password!</Text>
          <Text
            style={{
              color: theme.colors.neutral(0.5),
              marginTop: 5,
              fontSize: 16,
            }}
          >
            Enter your new password
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
              New Password
            </Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter new password"
              placeholderTextColor={theme.colors.neutral(0.5)}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                color: theme.colors.neutral(0.7),
                fontWeight: "600",
              }}
            >
              Confirm Password
            </Text>
            <TextInput
              style={styles.formInput}
              placeholder="Confirm new password"
              placeholderTextColor={theme.colors.neutral(0.5)}
            />
          </View>

          <TouchableOpacity
            onPress={() => router.push("auth/login")}
            style={styles.login}
          >
            <Text style={styles.logintext}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ResetPassword;

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
