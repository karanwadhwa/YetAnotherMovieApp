import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet
} from "react-native";
import { Text, View, Subtitle, Title } from "@shoutem/ui";

import SelectedScreenHeader from "../components/SelectedScreenHeader";
import ExternalLinks from "../components/ExternalLinks";
import ShortList from "../components/ShortList";

import { addToWatchlistTV } from "../store/actions/watchlist";

class SelectedTVScreen extends Component {
  static navigationOptions = {
    title: "TV Shows",
    header: null
  };

  castList = cast => (
    <View style={{ marginVertical: 15 }}>
      <Text style={{ fontSize: 25, color: "#FFF" }}>Cast</Text>
      <FlatList
        horizontal
        data={cast.slice(0, 15)}
        keyExtractor={item => item.id.toString()}
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
      overview,
      status,
      type,
      number_of_seasons,
      number_of_episodes,
      episode_run_time,
      first_air_date,
      credits,
      similar,
      recommendations,
      external_ids,
      homepage
    } = this.props.tv;
    return (
      <View style={styles.body}>
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
            <Subtitle style={styles.text}>Type:</Subtitle>
            <Subtitle style={styles.text}>{type}</Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Release Date:</Subtitle>
            <Subtitle style={styles.text}>{first_air_date}</Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Seasons:</Subtitle>
            <Subtitle style={styles.text}>{number_of_seasons}</Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Episodes:</Subtitle>
            <Subtitle style={styles.text}>{number_of_episodes}</Subtitle>
          </View>

          <View styleName="horizontal space-between">
            <Subtitle style={styles.text}>Episode Runtime:</Subtitle>
            <Subtitle style={styles.text}>{episode_run_time}min</Subtitle>
          </View>

          {/* <View styleName="horizontal space-between">
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
          </View> */}
        </View>

        {this.castList(credits.cast)}

        {!!similar.total_results && (
          <React.Fragment>
            <Text style={{ fontSize: 25, color: "#FFF" }}>Similar Shows</Text>
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
    return !!this.props.tv.id ? (
      <ScrollView style={styles.container}>
        <SelectedScreenHeader
          media={this.props.tv}
          watchlist={this.props.watchlist}
          addToWatchlist={this.props.addToWatchlistTV}
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
    tv: state.tv.selected,
    watchlist: state.watchlist.tv
  };
};

export default connect(
  mapStateToProps,
  { addToWatchlistTV }
)(SelectedTVScreen);

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
