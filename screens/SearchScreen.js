import React from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { View, Text, Title, Subtitle, Divider } from "@shoutem/ui";

import { setSearchTerm, fetchSearchResults } from "../store/actions/search";
import LongList from "../components/LongList";

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search",
    header: null
  };

  renderRecents = () => {
    return (
      <View>
        <Text style={{ color: "#FFF", fontSize: 28, paddingVertical: 15 }}>
          Recent Searches
        </Text>
        <FlatList
          data={this.props.search.recents}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.setSearchTerm(item)}>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 20,
                  paddingVertical: 5
                }}
              >
                {item}
              </Text>
              <Divider styleName="line" />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  renderLoading = () => {
    return (
      <ActivityIndicator size="large" color="#FFF" style={styles.center} />
    );
  };

  renderResults = () => {
    return (
      <ScrollView>
        <LongList
          data={this.props.search.searchResults}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  };

  renderEmpty = searchTerm => {
    return (
      <View style={styles.center}>
        <Title style={{ textAlign: "center", color: "#FFF" }}>
          Oops!{"\n"}We couldnt find anything matching "{searchTerm}"
        </Title>
      </View>
    );
  };

  renderBody = search => {
    if (search.loading) return this.renderLoading();

    if (search.searchTerm !== search.recents[0]) return this.renderRecents();

    if (!search.searchResults.length) {
      return this.renderEmpty(search.searchTerm);
    }

    return this.renderResults();
  };
  render() {
    const { search, setSearchTerm, fetchSearchResults } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchBar}
            value={search.searchTerm}
            onChangeText={searchTerm => setSearchTerm(searchTerm)}
            onEndEditing={() => fetchSearchResults(search.searchTerm)}
          />
        </View>
        {this.renderBody(search)}
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
  },
  searchBarContainer: {
    marginBottom: 15
  },
  center: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: "85%"
  }
});

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  { setSearchTerm, fetchSearchResults }
)(SearchScreen);
