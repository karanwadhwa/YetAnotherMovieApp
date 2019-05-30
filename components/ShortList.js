import React, { Component } from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Text, View, Caption } from "@shoutem/ui";
import { Image } from "react-native-elements";
import { Icon } from "expo";

class ShortList extends Component {
  render() {
    const { title, data } = this.props;
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
          <Text style={styles.titleText}>{title}</Text>
          <Text style={{ color: "#FFF", opacity: 0.6 }}>
            See All <Icon.Feather name="arrow-right" />
          </Text>
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
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item.poster_path}`
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
                <Icon.Ionicons name="ios-star" size={14} color="#FFCF00" />{" "}
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

export default ShortList;

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
