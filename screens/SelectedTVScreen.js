import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "@shoutem/ui";

import SelectedScreenHeader from "../components/SelectedScreenHeader";

class SelectedTVScreen extends Component {
  static navigationOptions = {
    title: "Movies",
    header: null
  };
  render() {
    return !!this.props.tv ? (
      <ScrollView style={styles.container}>
        <SelectedScreenHeader media={this.props.tv} />
      </ScrollView>
    ) : (
      <ActivityIndicator size="large" style={styles.activityIndicator} />
    );
  }
}

const mapStateToProps = state => {
  return {
    tv: state.tv.selected
  };
};

export default connect(mapStateToProps)(SelectedTVScreen);

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
