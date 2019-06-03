import React from "react";
import { connect } from "react-redux";
import { ScrollView, TextInput, StyleSheet } from "react-native";
import { View, Text } from "@shoutem/ui";

import Carousel from "../components/Carousel";
import ShortList from "../components/ShortList";

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

  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          styleName="horizontal space-between v-center"
          style={{ paddingBottom: 10 }}
        >
          <Text style={{ fontSize: 45, color: "#FFF" }}>TV Shows</Text>
          <TextInput placeholder="Search" style={styles.searchBar} />
        </View>

        {this.props.tv.popular && (
          <Carousel
            items={this.props.tv.popular}
            navigation={this.props.navigation}
          />
        )}

        <ShortList
          title="Popular"
          data={this.props.tv.popular}
          navigation={this.props.navigation}
          navigateTo="TVListScreen"
        />
        <ShortList
          title="Top Rated"
          data={this.props.tv.topRated}
          navigation={this.props.navigation}
          navigateTo="TVListScreen"
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
