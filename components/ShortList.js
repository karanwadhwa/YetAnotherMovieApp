import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Text, View, Caption } from "@shoutem/ui";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import { setSelectedMovieList, selectMovie } from "../store/actions/movies";
import { setSelectedTVList, selectTV } from "../store/actions/tv";

class ShortList extends Component {
  openSelectedPage = (id, title) => {
    if (!!title) {
      this.props.selectMovie(id);
      this.props.navigation.push("SelectedMovieScreen");
    } else {
      this.props.selectTV(id);
      this.props.navigation.push("SelectedTVScreen");
    }
  };

  render() {
    const { title, data, navigation, navigateTo } = this.props;
    return (
      <View
        style={{
          marginBottom: 30
        }}
      >
        <View
          styleName="horizontal space-between v-center"
          style={{
            marginBottom: 15
          }}
        >
          {!!title && <Text style={styles.titleText}>{title}</Text>}

          {!!navigateTo && (
            <TouchableOpacity
              onPress={() => {
                data[0].name
                  ? this.props.setSelectedTVList(title, data)
                  : this.props.setSelectedMovieList(title, data);
                navigation.navigate(navigateTo);
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  opacity: 0.6,
                  paddingVertical: 5,
                  paddingLeft: 5
                }}
              >
                See All <Feather name="arrow-right" />
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginRight: 15,
                width: 120
              }}
              onPress={() => this.openSelectedPage(item.id, item.title)}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`
                }}
                style={styles.poster}
              />
              <Text
                numberOfLines={2}
                style={{
                  color: "#FFF",
                  lineHeight: 18
                }}
              >
                {item.title || item.name}
              </Text>
              <Text>
                <Ionicons name="ios-star" size={14} color="#FFCF00" />{" "}
                {item.vote_average}
                {"  "}({item.vote_count})
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { setSelectedMovieList, selectMovie, setSelectedTVList, selectTV }
)(ShortList);

const styles = StyleSheet.create({
  titleText: {
    color: "#FFF",
    fontSize: 30
  },
  poster: {
    width: 120,
    height: 180,
    zIndex: 1,
    borderRadius: 5,
    marginBottom: 8
  }
});
