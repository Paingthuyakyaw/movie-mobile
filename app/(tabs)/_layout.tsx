import React from "react";
import CustomTabBar from "../components/custom-tabar";
import { Tabs } from "expo-router";

const _layout = () => {
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
