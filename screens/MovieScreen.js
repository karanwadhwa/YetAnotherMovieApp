import React from "react";
import { connect } from "react-redux";
import { ScrollView, TextInput, StyleSheet } from "react-native";
import { View, Text } from "@shoutem/ui";

import Carousel from "../components/Carousel";
import ShortList from "../components/ShortList";

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies
} from "../store/actions/movies";

class MovieScreen extends React.Component {
  static navigationOptions = {
    title: "Movies",
    header: null
  };

  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchTopRatedMovies();
    this.props.fetchNowPlayingMovies();
    this.props.fetchUpcomingMovies();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          styleName="horizontal space-between v-center"
          style={{ paddingBottom: 10 }}
        >
          <Text style={{ fontSize: 45, color: "#FFF" }}>Movies</Text>
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: "#1E2846",
              height: 30,
              width: 150,
              padding: 3,
              color: "#FFF",
              borderRadius: 3,
              textAlign: "center"
            }}
          />
        </View>

        {this.props.movies.popular && (
          <Carousel items={this.props.movies.popular} />
        )}

        <ShortList title="Popular" data={this.props.movies.popular} />
        <ShortList title="Top Rated" data={this.props.movies.topRated} />
        <ShortList title="Now Playing" data={this.props.movies.nowPlaying} />
        <ShortList title="Upcoming" data={this.props.movies.upcoming} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#141B31"
  }
});

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchNowPlayingMovies
  }
)(MovieScreen);
