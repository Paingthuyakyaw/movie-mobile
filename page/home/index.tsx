import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

interface movieProps {
  id: number;
  name: string;
  rating: number;
  image: string;
}

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.9;
const ITEM_SPACING = (width - ITEM_WIDTH) / 4;

const Index = () => {
  const movie: movieProps[] = [
    {
      id: 1,
      name: "Avenger",
      rating: 8.4,
      image:
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/avengers-the-first-avenger-mcu.jpeg",
    },
    {
      id: 2, // change id to be unique
      name: "Top Gun",
      rating: 8.4,
      image:
        "https://cdn.bikedekho.com/processedimages/bajaj/bajaj-avenger-cruise/source/bajaj-avenger-cruise65e99466c9272.jpg",
    },
    {
      id: 3,
      name: "Avenger",
      rating: 8.4,
      image:
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/avengers-the-first-avenger-mcu.jpeg",
    },
  ];

  const MovieCard = ({ item }: { item: movieProps }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.meta}>★ {item.rating}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={movie}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard item={item} />}
        horizontal
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    marginRight: 10,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 200,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  meta: {
    color: "#ddd",
    fontSize: 12,
    marginTop: 4,
  },
});
