import HomeScreen from "@/page/home";
import { Link } from "expo-router";
import { Dimensions, ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-white dark:bg-black"
      // contentContainerStyle={{ minHeight: Dimensions.get("window").height }}
    >
      <HomeScreen />
    </ScrollView>
  );
}
