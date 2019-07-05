import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Linking,
  StyleSheet
} from "react-native";
import { View, Text, Title, Subtitle, Divider } from "@shoutem/ui";
import { Icon } from "expo";

import SelectedScreenHeader from "../components/SelectedScreenHeader";
import ExternalLinks from "../components/ExternalLinks";
import ShortList from "../components/ShortList";

import { addToWatchlistMovie } from "../store/actions/watchlist";

class SelectedMovieScreen extends Component {
  static navigationOptions = {
    title: "Movies",
    header: null
  };

  castList = cast => (
    <View style={{ marginVertical: 15 }}>
      <Text style={{ fontSize: 25, color: "#FFF" }}>Cast</Text>
      <FlatList
        horizontal
        data={cast.slice(0, 15)}
        keyExtractor={item => item.cast_id.toString()}
        style={{ paddingVertical: 15 }}
        renderItem={({ item }) =>
          !!item.profile_path && (
            <View
              style={{
                marginRight: 15,
                width: 100
              }}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${
                    item.profile_path
                  }`
                }}
                style={styles.poster}
              />
              <Text
                numberOfLines={2}
                style={{
                  color: "#FFF",
                  lineHeight: 18,
                  textAlign: "center"
                }}
              >
                {item.name}
              </Text>
            </View>
          )
        }
      />
    </View>
  );

  renderBody() {
    const {
      tagline,
      overview,
      status,
      release_date,
      runtime,
      spoken_languages,
      budget,
      revenue,
      credits,
      similar,
      recommendations,
      external_ids,
      homepage
    } = this.props.movie;
    return (
      <View style={styles.body}>
        <Subtitle style={{ color: "#FFF", textAlign: "center" }}>
          {tagline}
        </Subtitle>

        <View style={{ marginVertical: 15 }}>
          <Text style={{ fontSize: 30, color: "#FFF", marginBottom: 10 }}>
            Synopsis
          </Text>
          <Subtitle style={styles.text}>{overview}</Subtitle>
        </View>

        <View style={{ marginVertical: 15 }}>
          <Text style={{ fontSize: 25, color: "#FFF", marginBottom: 10 }}>
            Details
          </Text>
          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Status:</Subtitle>
            <Subtitle style={styles.text}>{status}</Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Release Date:</Subtitle>
            <Subtitle style={styles.text}>{release_date}</Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Runtime:</Subtitle>
            <Subtitle style={styles.text}>{runtime}min</Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Languages:</Subtitle>
            <Subtitle style={styles.text}>
              {spoken_languages.map(lang => lang.name).join(", ")}
            </Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Budget:</Subtitle>
            <Subtitle style={styles.text}>
              {!!budget ? `$${budget}` : "-"}
            </Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Revenue:</Subtitle>
            <Subtitle style={styles.text}>
              {!!revenue ? `$${revenue}` : "-"}
            </Subtitle>
          </View>
        </View>

        {this.castList(credits.cast)}

        {!!similar.total_results && (
          <React.Fragment>
            <Text style={{ fontSize: 25, color: "#FFF" }}>Similar Movies</Text>
            <ShortList
              data={similar.results}
              navigation={this.props.navigation}
            />
          </React.Fragment>
        )}

        {!!recommendations.total_results && (
          <React.Fragment>
            <Text style={{ fontSize: 25, color: "#FFF" }}>Recommendations</Text>
            <ShortList
              data={recommendations.results}
              navigation={this.props.navigation}
            />
          </React.Fragment>
        )}

        <ExternalLinks
          imdb={external_ids.imdb_id}
          facebook={external_ids.facebook_id}
          twitter={external_ids.twitter_id}
          instagram={external_ids.instagram_id}
          homepage={homepage}
        />
      </View>
    );
  }

  render() {
    return !!this.props.movie.id ? (
      <ScrollView style={styles.container}>
        <SelectedScreenHeader
          media={this.props.movie}
          watchlist={this.props.watchlist}
          addToWatchlist={this.props.addToWatchlistMovie}
        />
        {this.renderBody()}
      </ScrollView>
    ) : (
      <ActivityIndicator
        size="large"
        color="white"
        style={styles.activityIndicator}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies.selected,
    watchlist: state.watchlist.movies
  };
};

export default connect(
  mapStateToProps,
  { addToWatchlistMovie }
)(SelectedMovieScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141B31"
  },
  activityIndicator: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#141B31"
  },
  body: {
    padding: 20
  },
  text: {
    color: "#FFF"
  },
  poster: {
    width: 100,
    height: 150,
    zIndex: 1,
    borderRadius: 7,
    marginBottom: 8
  }
});
