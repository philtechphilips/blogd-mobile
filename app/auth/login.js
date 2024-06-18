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

const Login = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={theme.colors.neutral(0.8)}
          />
        </Pressable>
        <View>
          <Text style={styles.headingText}>Welcome Back!</Text>
          <Text
            style={{
              color: theme.colors.neutral(0.5),
              marginTop: 5,
              fontSize: 16,
            }}
          >
            Login to your account
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
              E-mail Address
            </Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter your e-mail"
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
              Password
            </Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter your password"
              placeholderTextColor={theme.colors.neutral(0.5)}
            />
          </View>

          <Pressable onPress={() => router.push("/auth/forgot-password")}>
            <Text
              style={{
                color: theme.colors.neutral(0.5),
                marginTop: -15,
                marginBottom: -15,
                textAlign: "right",
                fontSize: 16,
                color: theme.colors.primary,
              }}
            >
              Forgot password?
            </Text>
          </Pressable>
          <TouchableOpacity
            onPress={() => router.push("auth/login")}
            style={styles.login}
          >
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: theme.colors.neutral(0.4),
              padding: 16,
            }}
          >
            <Image
              source={require("../../assets/images/download.png")}
              width={20}
              height={20}
            ></Image>
            <Text style={{ fontSize: 16, color: theme.colors.neutral(0.5) }}>
              Continue with Google
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", gap: 2, justifyContent: "center" }}
          >
            <Text style={{ fontSize: 16, color: theme.colors.neutral(0.6) }}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => router.back()}>
              <Text style={{ fontSize: 16, color: theme.colors.primary }}>
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Login;

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
