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
import { Feather } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8;

const NavBar = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colorScheme === "dark" ? "black" : "white"}
      />
      <View className=" flex-row w-full justify-between py-4  bg-white dark:bg-black px-5">
        <TextInput className=" border" style={styles.input} />
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
