import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View, Title, Caption } from "@shoutem/ui";
import Swiper from "react-native-swiper";
import { Icon } from "expo";

class SelectedScreenHeader extends Component {
  render() {
    const {
      title,
      name,
      vote_average,
      poster_path,
      images,
      genres
    } = this.props.media;
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
                uri: `https://image.tmdb.org/t/p/w1000_and_h563_face${
                  backdrop.file_path
                }`
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
            <Title styleName="multiline" style={styles.posterText}>
              {title || name}
            </Title>
            <Title style={styles.posterText}>
              <Icon.Ionicons name="ios-star" size={18} color="#FFCF00" />{" "}
              {vote_average}
            </Title>
            <Caption style={styles.posterText}>
              {genres.map(genre => genre.name).join(", ")}
            </Caption>
          </View>
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
    marginHorizontal: 15
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
