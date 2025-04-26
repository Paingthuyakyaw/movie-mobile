import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useTrending } from "@/store/server/movie/queries";
import { trend } from "@/store/server/movie/typed";

const TrendItem = ({ item }: { item: trend }) => {
  return (
    <View className=" w-[160px] mx-2">
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
        className=" rounded-lg w-[160px] h-[200px] "
      />
    </View>
  );
};

const Trending = () => {
  const { data } = useTrending();

  return (
    <View className=" mt-16 px-4">
      <Text className=" font-extrabold text-red-500 text-2xl">
        Trending Now
      </Text>
      <FlatList
        className=" mt-3"
        horizontal
        data={data?.results || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TrendItem item={item} />}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({});
