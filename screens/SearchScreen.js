import React from "react";
import { connect } from "react-redux";
import { TextInput, StyleSheet } from "react-native";
import { View, Text } from "@shoutem/ui";

import { setSearchTerm } from "../store/actions/search";

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search",
    header: null
  };

  render() {
    const { search, setSearchTerm } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchBar}
            value={search.searchTerm}
            onChangeText={searchTerm => setSearchTerm(searchTerm)}
            onEndEditing={() => alert(search.searchTerm)}
          />
        </View>
      </View>
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
    height: 40,
    width: "100%",
    padding: 10,
    color: "#FFF",
    borderRadius: 3
  }
});

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  { setSearchTerm }
)(SearchScreen);
