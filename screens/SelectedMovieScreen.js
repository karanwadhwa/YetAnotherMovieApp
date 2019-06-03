import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";

class SelectedMovieScreen extends Component {
  static navigationOptions = {
    title: "Movies",
    header: null
  };

  render() {
    return !!this.props.movie ? (
      <View>
        <Text>{this.props.movie.title} </Text>
      </View>
    ) : (
      <ActivityIndicator size="large" style={styles.activityIndicator} />
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
  activityIndicator: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  }
});
