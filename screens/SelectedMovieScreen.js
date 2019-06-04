import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "@shoutem/ui";

import SelectedScreenHeader from "../components/SelectedScreenHeader";

class SelectedMovieScreen extends Component {
  static navigationOptions = {
    title: "Movies",
    header: null
  };

  render() {
    return !!this.props.movie ? (
      <ScrollView style={styles.container}>
        <SelectedScreenHeader media={this.props.movie} />
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
    movie: state.movies.selected
  };
};

export default connect(mapStateToProps)(SelectedMovieScreen);

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
  }
});
