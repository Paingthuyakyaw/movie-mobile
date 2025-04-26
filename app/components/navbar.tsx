import {
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { Feather, Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.75;

const NavBar = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="">
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colorScheme === "dark" ? "black" : "white"}
      />
      <View className=" px-4 flex-row w-full items-center gap-1 justify-between py-4  bg-white dark:bg-black">
        <View className=" items-center dark:bg-[#2D2D2D] dark:border-0 rounded-xl border border-gray-500 flex-row">
          <Ionicons
            name="search"
            size={16}
            className=" pl-3 pr-2  dark:!text-white "
          />
          <TextInput
            autoFocus={false}
            placeholder="Search"
            className=" border-[0px] !outline-none dark:placeholder:text-white "
            style={styles.input}
          />
        </View>
        <Pressable
          onPress={() =>
            setColorScheme(colorScheme === "dark" ? "light" : "dark")
          }
          className=""
        >
          <Feather
            name={colorScheme === "dark" ? "moon" : "sun"}
            color={colorScheme === "dark" ? "white" : "black"}
            size={20}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  input: {
    width: ITEM_WIDTH,
  },
});
