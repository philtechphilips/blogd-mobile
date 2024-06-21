import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeViewAndroid from "../../components/SafeAreaView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../constants/theme";
import { hp } from "../../helpers/common";
import TodaysList from "../../components/TodaysList";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              borderWidth: 1,
              borderColor: theme.colors.neutral(0.2),
              padding: 6,
              borderRadius: 8,
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={24}
              color={theme.colors.neutral(0.5)}
            />
          </Pressable>
        </View>


        <View>
          <Text style={{ color: theme.colors.neutral(0.5), fontWeight: "500" }}>
            18 July 2024.
          </Text>
          <Text
            style={{
              color: theme.colors.neutral(0.8),
              fontWeight: "500",
              fontSize: hp(3.5),
              marginTop: 4,
            }}
          >
            Today Discover.
          </Text>
        </View>

        <TodaysList />
      </View>
      <StatusBar style="dark-content"  />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
