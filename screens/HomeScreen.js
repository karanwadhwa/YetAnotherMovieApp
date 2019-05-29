import React from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies
} from "../store/actions/movies";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchTopRatedMovies();
    this.props.fetchNowPlayingMovies();
    this.props.fetchUpcomingMovies();
  }

  renderPopularMovies = () => {
    return this.props.movies.popular ? (
      this.props.movies.popular.map(movie => (
        <Text key={movie.id}>{movie.original_title}</Text>
      ))
    ) : (
      <ActivityIndicator />
    );
  };

  renderTopRatedMovies = () => {
    return this.props.movies.topRated ? (
      this.props.movies.topRated.map(movie => (
        <Text key={movie.id}>{movie.original_title}</Text>
      ))
    ) : (
      <ActivityIndicator />
    );
  };

  renderNowPlayingMovies = () => {
    return this.props.movies.nowPlaying ? (
      this.props.movies.nowPlaying.map(movie => (
        <Text key={movie.id}>{movie.original_title}</Text>
      ))
    ) : (
      <ActivityIndicator />
    );
  };

  renderUpcomingMovies = () => {
    return this.props.movies.upcoming ? (
      this.props.movies.upcoming.map(movie => (
        <Text key={movie.id}>{movie.title}</Text>
      ))
    ) : (
      <ActivityIndicator />
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>---------Popular-------------</Text>
        {this.renderPopularMovies()}

        <Text>---------Top Rated-----------</Text>
        {this.renderTopRatedMovies()}

        <Text>---------Now Playing--------</Text>
        {this.renderNowPlayingMovies()}

        <Text>---------Upcoming-----------</Text>
        {this.renderUpcomingMovies()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
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
)(HomeScreen);
