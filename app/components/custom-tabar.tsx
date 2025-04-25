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
    <View className=" flex-row h-[60px] shadow rounded-full pt-5 mb-5 items-center  ">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

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
            // className={` ${isFocused ? " bg-blue-500" : " "}`}
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
              color={isFocused ? "#ff5959" : "#999"}
            />

            <Text style={{ color: isFocused ? "#ff5959" : "black" }}>
              {/* {typeof label === "function"
                ? label({
                    focused: isFocused,
                    color: isFocused ? "blue" : "gray",
                    position: "below-icon",
                    children: route.name,
                  })
                : label} */}
              {route.name == "index" ? "home" : route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
