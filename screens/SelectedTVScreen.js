import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";

class SelectedTVScreen extends Component {
  static navigationOptions = {
    title: "Movies",
    header: null
  };
  render() {
    return !!this.props.tv ? (
      <View>
        <Text> {this.props.tv.name} </Text>
      </View>
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
  activityIndicator: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  }
});
