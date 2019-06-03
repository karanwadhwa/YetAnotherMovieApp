import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, StyleSheet } from "react-native";

import LongList from "../components/LongList";

class MovieListScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LongList
          title={this.props.selectedList.listTitle}
          data={this.props.selectedList.listData}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedList: state.movies.selectedList
  };
};

export default connect(mapStateToProps)(MovieListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#141B31"
  }
});
