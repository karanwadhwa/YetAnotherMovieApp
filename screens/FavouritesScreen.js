import React from "react";
import { View, Text, StyleSheet } from "react-native";

class FavouritesScreen extends React.Component {
  static navigationOptions = {
    title: "Favourites"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Favourites</Text>
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

export default FavouritesScreen;
