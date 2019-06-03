import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { View, Text, Title, Caption, Subtitle } from "@shoutem/ui";
import Swiper from "react-native-swiper";
import { Image } from "react-native-elements";
import Ionicon from "@expo/vector-icons/Ionicons";

import Genres from "../constants/genres.js";

import { selectMovie } from "../store/actions/movies";
import { selectTV } from "../store/actions/tv";

class Carousel extends Component {
  renderGenres = genre_ids => {
    let genres = Genres.filter(genre => genre_ids.includes(genre.id)).map(
      genre => genre.name
    );
    return (
      <Caption numberOfLines={2} style={styles.posterText}>
        {genres.join(", ")}
      </Caption>
    );
  };

  openSelectedPage = (id, title) => {
    if (!!title) {
      this.props.selectMovie(id);
      this.props.navigation.navigate("SelectedMovieScreen");
    } else {
      this.props.selectTV(id);
      this.props.navigation.navigate("SelectedTVScreen");
    }
  };

  render() {
    return (
      <View>
        <Swiper
          autoplay
          autoplayTimeout={4}
          showsPagination={false}
          height={248}
        >
          {this.props.items.map(
            ({
              id,
              title,
              name,
              backdrop_path,
              poster_path,
              vote_average,
              genre_ids
            }) => (
              <TouchableWithoutFeedback
                key={id}
                onPress={() => this.openSelectedPage(id, title)}
              >
                <View>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w1000_and_h563_face${backdrop_path}`
                    }}
                    style={styles.backdrop}
                  />

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
                        width: "60%",
                        marginBottom: 15
                      }}
                    >
                      <Title
                        styleName="multiline"
                        numberOfLines={2}
                        style={styles.posterText}
                      >
                        {title || name}
                      </Title>

                      <Title style={styles.posterText}>
                        <Ionicon name="ios-star" size={18} color="#FFCF00" />{" "}
                        {vote_average}
                      </Title>
                      {this.renderGenres(genre_ids)}
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )
          )}
        </Swiper>
      </View>
    );
  }
}

export default connect(
  null,
  { selectMovie, selectTV }
)(Carousel);

const styles = StyleSheet.create({
  backdrop: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    opacity: 0.6
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
    marginBottom: 3,
    opacity: 0.9
  }
});
