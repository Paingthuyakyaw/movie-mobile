import { Stack } from "expo-router";
import "./global.css";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import NavBar from "./components/navbar";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <View className={`${colorScheme === "dark" ? "dark" : ""} flex-1`}>
      <NavBar />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
