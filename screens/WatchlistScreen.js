import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Watchlist extends React.Component {
  static navigationOptions = {
    title: "Watchlist",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Watchlist</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  }
});

export default Watchlist;
