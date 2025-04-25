import React from "react";
import CustomTabBar from "../components/custom-tabar";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";

const _layout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: "Home",
        }}
        name="index"
      />
      <Tabs.Screen name="save" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default _layout;
