import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You can use others like Feather, MaterialIcons, etc.

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View className=" p-0  m-0 h-[70px]  dark:bg-[#2D2D2D]">
      <View className=" flex-row h-[70px]   pt-3 pb-2  items-center  ">
        {state.routes.map((route, index) => {
          // const label =
          //   options.tabBarLabel !== undefined
          //     ? options.tabBarLabel
          //     : options.title !== undefined
          //     ? options.title
          //     : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={
                  route.name === "home"
                    ? "home"
                    : route.name === "save"
                    ? "bookmark"
                    : route.name === "search"
                    ? "search"
                    : "person"
                }
                size={20}
                className={` ${
                  isFocused
                    ? " !text-red-500 "
                    : " !text-gray-500 dark:!text-white"
                } `}
              />

              <Text
                className={`${
                  isFocused ? "!text-red-500" : " !text-black dark:!text-white"
                }`}
              >
                {route.name == "index" ? "home" : route.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
