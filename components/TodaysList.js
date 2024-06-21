import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { wp } from "../helpers/common";
import { Image } from "expo-image";
import { theme } from "../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { data } from "../constants/data";

const TodaysList = () => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.blogData}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <TodayDiscovery data={item} index={index} />
      )}
    />
  );
};

const TodayDiscovery = ({ data }) => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={{ width: wp(70), height: 400, position: "relative" }}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../assets/images/newspapers-4565916_1920.jpg")}
            transition="100"
          />
          <View style={styles.overlay}></View>
        </View>
        <View style={styles.blogCategory}>
          <Text style={styles.categoryText}>{data.category}</Text>
        </View>
        <View style={styles.blogContent}>
          <View style={styles.author}>
            <Image
              style={styles.authorImage}
              source={require("../assets/images/newspapers-4565916_1920.jpg")}
              transition="100"
            />
            <Text style={styles.authorText}>{data.author}</Text>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={{
                color: theme.colors.white,
                fontWeight: theme.fontWeights.semibold,
                fontSize: 24,
              }}
            >
              {data.title}
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Ionicons
                name="time-outline"
                size={20}
                color={theme.colors.white}
              ></Ionicons>
              <Text style={{ color: theme.colors.white }}>2 hours ago</Text>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Ionicons
                name="heart-outline"
                size={20}
                color={theme.colors.white}
              ></Ionicons>
              <Text style={{ color: theme.colors.white }}>100 likes</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default TodaysList;

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: 10,
    gap: 8,
  },

  imageWrapper: {
    position: "relative",
    width: wp(70),
    height: 400,
    borderRadius: 10,
    overflow: "hidden", // Ensure the overlay respects the image border radius
    zIndex: 10,
    elevation: 10,
  },

  image: {
    height: "100%",
    width: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjusted opacity
    zIndex: 10,
    elevation: 10,
  },

  blogCategory: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: theme.colors.neutral(0.3),
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    borderRadius: 8,
    padding: 10,
    zIndex: 20,
    elevation: 20,
    marginLeft: 10,
    marginTop: 10,
    gap: 8,
  },

  categoryText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: theme.fontWeights.semibold,
  },

  blogContent: {
    position: "absolute",
    bottom: 20,
    left: 10,
    zIndex: 20,
    elevation: 20,
    gap: 10,
  },

  author: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingHorizontal: 10,
  },

  authorImage: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },

  authorText: {
    fontSize: 16,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.semibold,
  },
});
