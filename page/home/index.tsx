import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNowPlaying } from "@/store/server/movie/queries";
import { nowPlaying } from "@/store/server/movie/typed";
import Carousel, { TAnimationStyle } from "react-native-reanimated-carousel";
import { Ionicons } from "@expo/vector-icons";
import Trending from "./trending";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width;
// const ITEM_SPACING = (width - ITEM_WIDTH) / 1;

const Index = () => {
  const { data } = useNowPlaying();

  return (
    <View>
      <Carousel
        width={width}
        height={200}
        autoPlay
        data={data?.results || []}
        scrollAnimationDuration={1500}
        renderItem={({ item }) => (
          <View className=" -mt-5 relative">
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
              }}
              style={{ width: ITEM_WIDTH, height: 250 }}
            />
            <View className=" p-3 absolute bottom-0 w-full font-extrabold !h-[80px] bg-black/50">
              <View className=" flex-row items-center justify-between">
                <View>
                  <Text className=" text-2xl font-extrabold dark:text-white text-white">
                    {item.title}
                  </Text>
                  <View className=" text-white mt-2 flex-row gap-1 !items-center">
                    <Text>
                      <Ionicons
                        name="star"
                        size={12}
                        className=" !text-white"
                      />
                    </Text>
                    <Text className="  text-white">
                      {item.vote_average.toFixed(1)}
                    </Text>
                    <Text className=" px-2 text-white">|</Text>
                    <Text className=" text-white">{item.release_date}</Text>
                  </View>
                </View>
                <Ionicons
                  name="play-circle"
                  size={50}
                  className=" !text-white"
                />
              </View>
            </View>
          </View>
        )}
        mode="parallax"
      />
      <Trending />
    </View>
  );
};

export default Index;
