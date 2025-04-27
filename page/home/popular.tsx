import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { popular } from "@/store/server/movie/typed";
import { usePopular } from "@/store/server/movie/queries";

const TrendItem = ({ item }: { item: popular }) => {
  return (
    <View className=" w-[140px] mx-2">
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
        className=" rounded-lg w-[140px] h-[180px] "
      />
    </View>
  );
};

const LatestShow = () => {
  const [show, setShow] = useState<"movie" | "tv">("movie");
  const { data } = usePopular({ type: show });
  return (
    <View className=" mt-10 px-4">
      <Text className=" font-extrabold text-red-500 text-2xl">Popular</Text>
      <View className=" mt-3 flex-row gap-3">
        <Pressable
          onPress={() => setShow("movie")}
          className={` rounded-full ${
            show === "movie" ? "bg-red-500" : " border border-red-500"
          }  px-5 py-2 text-white `}
        >
          <Text
            className={`${
              show === "movie" ? " text-white" : " text-black dark:text-white"
            }`}
          >
            Movies
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setShow("tv")}
          className={` rounded-full ${
            show === "tv" ? "bg-red-500" : " border border-red-500"
          }  px-5 py-2 text-white `}
        >
          <Text
            className={`${
              show === "tv" ? " text-white" : " text-black dark:text-white"
            }`}
          >
            Sereies
          </Text>
        </Pressable>
      </View>

      <View className=" mt-4 h-[230px] ">
        <FlatList
          className=" mt-3"
          horizontal
          data={data?.results || []}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TrendItem item={item} />}
        />
      </View>
    </View>
  );
};

export default LatestShow;

const styles = StyleSheet.create({});
