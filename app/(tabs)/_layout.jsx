import { Tabs, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 3, marginTop: 4 }}>
      {icon === "user" ? (
        <AntDesign name={icon} size={20} color={color}></AntDesign>
      ) : (
        <Ionicons name={icon} size={20} color={color}></Ionicons>
      )}
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FF6347",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#efefef",
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="home-outline"
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="search-outline"
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="saved"
          options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="save-outline"
                color={color}
                name="Saved"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="user"
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
