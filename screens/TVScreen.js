import React from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { View, Text } from "@shoutem/ui";

import Carousel from "../components/Carousel";

import { fetchPopularTV, fetchTopRatedTV } from "../store/actions/tv";

class TVScreen extends React.Component {
  static navigationOptions = {
    title: "TV",
    header: null
  };

  componentDidMount() {
    this.props.fetchPopularTV();
    this.props.fetchTopRatedTV();
  }

  renderPopularTV = () => {
    return this.props.tv.popular ? (
      this.props.tv.popular.map(show => <Text key={show.id}>{show.name}</Text>)
    ) : (
      <ActivityIndicator />
    );
  };

  renderTopRatedTV = () => {
    return this.props.tv.topRated ? (
      this.props.tv.topRated.map(show => <Text key={show.id}>{show.name}</Text>)
    ) : (
      <ActivityIndicator />
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          styleName="horizontal space-between v-center"
          style={{ paddingBottom: 10 }}
        >
          <Text style={{ fontSize: 45, color: "#FFF" }}>TV Shows</Text>
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

        {this.props.tv.popular && <Carousel items={this.props.tv.popular} />}

        <Text>---------Popular-------------</Text>
        {this.renderPopularTV()}

        <Text>---------Top Rated-----------</Text>
        {this.renderTopRatedTV()}
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
    tv: state.tv
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPopularTV,
    fetchTopRatedTV
  }
)(TVScreen);
