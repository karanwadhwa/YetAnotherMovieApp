import React from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image
} from "react-native";
import { View, Text, Caption, Divider } from "@shoutem/ui";

import LongList from "../components/LongList";

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Movies" // will get toggled between "Movies" and "TV Shows"
    };
  }

  static navigationOptions = {
    title: "Watchlist",
    header: null
  };

  renderEmpty = () => {
    return (
      <View styleName="vertical v-center space-around">
        <View
          style={{
            width: "60%",
            alignSelf: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ textAlign: "center" }}>
            Add some {this.state.selected} to your watchlist to see them listed
            here.
          </Text>
        </View>
      </View>
    );
  };

  renderList = () => {
    if (this.state.selected === "Movies") {
      return !!this.props.watchlist.movies.length ? (
        <LongList
          data={this.props.watchlist.movies}
          navigation={this.props.navigation}
        />
      ) : (
        this.renderEmpty()
      );
    } else if (this.state.selected === "TV Shows") {
      return !!this.props.watchlist.tv.length ? (
        <LongList
          data={this.props.watchlist.tv}
          navigation={this.props.navigation}
        />
      ) : (
        this.renderEmpty()
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View styleName="horizontal space-between v-center">
            <Text style={{ fontSize: 40, color: "#FFF" }}>Watchlist</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.setState({
                  selected:
                    this.state.selected === "Movies" ? "TV Shows" : "Movies"
                })
              }
            >
              <Text style={{ color: "#FFF" }}>{this.state.selected}</Text>
            </TouchableOpacity>
          </View>

          <Divider />

          {this.renderList()}
        </ScrollView>
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
  button: {
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 8,
    width: "30%",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist
  };
};

export default connect(mapStateToProps)(Watchlist);
