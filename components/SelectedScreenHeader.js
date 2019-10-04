import React, { Component } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { Text, View, Title, Caption, Heading } from "@shoutem/ui";
import Swiper from "react-native-swiper";
import Ionicons from "@expo/vector-icons/Ionicons";

class SelectedScreenHeader extends Component {
  render() {
    const { media, watchlist, addToWatchlist } = this.props;
    const { title, name, vote_average, poster_path, images, genres } = media;
    return (
      <View style={{ marginBottom: -150 }}>
        <Swiper
          autoplay
          autoplayTimeout={4}
          showsPagination={false}
          height={248}
        >
          {images.backdrops.map(backdrop => (
            <Image
              key={backdrop.file_path}
              source={{
                uri: `https://image.tmdb.org/t/p/w1000_and_h563_face${backdrop.file_path}`
              }}
              style={styles.backdrop}
            />
          ))}
        </Swiper>
        <View style={styles.posterContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
            }}
            style={styles.poster}
          />
          <View
            style={{
              justifyContent: "flex-end",
              width: "60%"
            }}
          >
            <Heading styleName="multiline" style={styles.posterText}>
              {title || name}
            </Heading>
            <Title style={styles.posterText}>
              <Ionicons name="ios-star" size={18} color="#FFCF00" />{" "}
              {vote_average}
            </Title>
            <Caption style={styles.posterText}>
              {genres.map(genre => genre.name).join(", ")}
            </Caption>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            alignItems: "flex-end",
            width: "100%"
          }}
        >
          <TouchableOpacity
            onPress={() => addToWatchlist(media)}
            style={{
              paddingHorizontal: 15,
              paddingBottom: 8,
              marginRight: 10
            }}
          >
            <Ionicons
              name="ios-bookmark"
              size={38}
              color={
                watchlist.some(item => item.id === media.id)
                  ? "#FFCF00"
                  : "#DDEEFF"
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SelectedScreenHeader;

const styles = StyleSheet.create({
  backdrop: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    opacity: 0.8
  },
  posterContainer: {
    top: -150,
    marginHorizontal: 15,
    flexDirection: "row"
  },
  poster: {
    width: 120,
    height: 180,
    zIndex: 1,
    borderRadius: 5,
    marginRight: 15
  },
  posterText: {
    backgroundColor: "#141B31",
    color: "#FFF",
    paddingHorizontal: 5,
    marginBottom: 5,
    opacity: 0.9
  },
  tagline: {
    backgroundColor: "#141B31",
    padding: 5,
    marginBottom: 5,
    opacity: 0.9
  }
});
