import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/Raleway-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="auth/login"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="auth/create-account"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="auth/forgot-password"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="auth/verify-account"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="auth/reset-password"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="auth/verify-password-reset"
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="screens/home"
        options={{
          headerShown: false,
        }}
      />
    </Stack>

    
  );
}

