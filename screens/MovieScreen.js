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
import { setSearchTerm, fetchSearchResults } from "../store/actions/search";

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
    const {
      search,
      setSearchTerm,
      fetchSearchResults,
      movies,
      navigation
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View
          styleName="horizontal space-between v-center"
          style={{ paddingBottom: 10 }}
        >
          <Text style={{ fontSize: 45, color: "#FFF" }}>Movies</Text>
          <TextInput
            placeholder="Search"
            style={styles.searchBar}
            value={search.searchTerm}
            onChangeText={searchTerm => setSearchTerm(searchTerm)}
            onEndEditing={() => {
              fetchSearchResults(search.searchTerm);
              navigation.navigate("Search");
            }}
          />
        </View>

        {movies.popular && (
          <Carousel items={movies.popular} navigation={this.props.navigation} />
        )}

        <ShortList
          title="Popular"
          data={movies.popular}
          navigation={navigation}
          navigateTo="MovieListScreen"
        />
        <ShortList
          title="Top Rated"
          data={movies.topRated}
          navigation={navigation}
          navigateTo="MovieListScreen"
        />
        <ShortList
          title="Now Playing"
          data={movies.nowPlaying}
          navigation={navigation}
          navigateTo="MovieListScreen"
        />
        <ShortList
          title="Upcoming"
          data={movies.upcoming}
          navigation={navigation}
          navigateTo="MovieListScreen"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#141B31"
  },
  searchBar: {
    backgroundColor: "#1E2846",
    height: 30,
    width: 150,
    padding: 3,
    color: "#FFF",
    borderRadius: 3,
    textAlign: "center"
  }
});

const mapStateToProps = state => {
  return {
    movies: state.movies,
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchNowPlayingMovies,
    setSearchTerm,
    fetchSearchResults
  }
)(MovieScreen);
