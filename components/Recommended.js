import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { Image } from "expo-image";
import { hp, wp } from "../helpers/common";
import Ionicons from "@expo/vector-icons/Ionicons";
import { data } from "../constants/data";

const Recommended = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
          paddingVertical: 10
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.neutral(0.8),
            fontWeight: theme.fontWeights.semibold,
          }}
        >
          Recommended
        </Text>
        <Text style={{ color: theme.colors.primary }}>See all</Text>
      </View>

      <FlatList
        vertical
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
        data={data.blogData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <RecommendedView data={item} index={index} />
        )}
      />
    </>
  );
};

const RecommendedView = () => {
  return (
    <View
      style={{
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.neutral(0.2),
        flexDirection: "row",
        gap: 8,
      }}
    >
      <Image
        style={styles.Image}
        source={require("../assets/images/newspapers-4565916_1920.jpg")}
        transition="200"
      />
      <View style={{ width: wp(54), gap: 6 }}>
        <Text
          style={{
            color: theme.colors.neutral(0.5),
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          Tech
        </Text>
        <Text
          style={{
            color: theme.colors.neutral(0.7),
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Elon Musk is nuild the biggest cooling system in the world
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons
              name="time-outline"
              size={20}
              color={theme.colors.neutral(0.5)}
            ></Ionicons>
            <Text style={{ color: theme.colors.neutral(0.5) }}>
              2 hours ago
            </Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Ionicons
          name="heart-outline"
          size={28}
          color={theme.colors.neutral(0.6)}
        ></Ionicons>
      </View>
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  Image: {
    height: hp(12),
    width: wp(22),
    borderRadius: 8,
  },
});
