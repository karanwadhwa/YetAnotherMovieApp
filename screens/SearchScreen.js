import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { View } from "@shoutem/ui";

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search" style={styles.searchBar} />
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

export default SearchScreen;
