import HomeScreen from "@/page/home";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className=" h-screen bg-white dark:bg-black">
      <HomeScreen />
    </View>
  );
}
