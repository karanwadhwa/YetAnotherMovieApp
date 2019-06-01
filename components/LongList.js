import React, { Component } from "react";
import {
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { View, Text, Title, Subtitle, Caption } from "@shoutem/ui";
import { Icon } from "expo";

import Genres from "../constants/genres.js";

class LongList extends Component {
  renderGenres = genre_ids => {
    let genres = Genres.filter(genre => genre_ids.includes(genre.id)).map(
      genre => genre.name
    );
    return (
      <Caption numberOfLines={2} style={{ color: "#FFF" }}>
        {genres.join(", ")}
      </Caption>
    );
  };

  render() {
    const { title, data } = this.props;
    return (
      <View>
        <View
          styleName="horizontal space-between v-center"
          style={{ paddingBottom: 10 }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "#FFF",
              width: "60%"
            }}
          >
            {title}
          </Text>
          <TextInput placeholder="Search" style={styles.searchBar} />
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${
                      item.poster_path
                    }`
                  }}
                  style={styles.poster}
                />
                <View style={styles.backgroundContainer}>
                  <View style={{ width: 140 }} />
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      padding: 15,
                      width: "62%",
                      zIndex: 5
                    }}
                  >
                    <Title numberOfLines={2} style={{ color: "#FFF" }}>
                      {item.title || item.name}
                    </Title>
                    <Subtitle style={{ color: "#FFF" }}>
                      <Icon.Ionicons
                        name="ios-star"
                        size={16}
                        color="#FFCF00"
                      />{" "}
                      {item.vote_average}
                    </Subtitle>
                    {this.renderGenres(item.genre_ids)}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default LongList;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#1E2846",
    height: 30,
    width: 150,
    padding: 3,
    color: "#FFF",
    borderRadius: 3,
    textAlign: "center"
  },
  container: {
    //marginVertical: 20
  },
  backgroundContainer: {
    height: 130,
    top: -110,
    marginBottom: -90,
    flexDirection: "row",
    backgroundColor: "#1E2846",
    borderRadius: 10
  },
  poster: {
    width: 100,
    height: 150,
    zIndex: 1,
    borderRadius: 8,
    marginHorizontal: 20
  },
  posterText: {
    color: "#FFF",
    marginBottom: 3
  }
});
