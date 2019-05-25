import React from "react";
import { View, Text, StyleSheet } from "react-native";

class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: "Discover"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Discover</Text>
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

export default DiscoverScreen;
