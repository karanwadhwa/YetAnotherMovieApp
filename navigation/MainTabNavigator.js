import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "expo";

import MovieScreen from "../screens/MovieScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const MovieStack = createStackNavigator({
  Home: MovieScreen
});

MovieStack.navigationOptions = {
  tabBarLabel: "Movies",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather
      name="film"
      size={24}
      style={{ marginBottom: -3 }}
      color={tintColor}
    />
  )
};

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen
});

DiscoverStack.navigationOptions = {
  tabBarLabel: "Discover",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather
      name="home"
      size={24}
      style={{ marginBottom: -3 }}
      color={tintColor}
    />
  )
};

const FavouritesStack = createStackNavigator({
  Favourites: FavouritesScreen
});

FavouritesStack.navigationOptions = {
  tabBarLabel: "Favourites",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather
      name="home"
      size={24}
      style={{ marginBottom: -3 }}
      color={tintColor}
    />
  )
};

const MainTabNavigator = createBottomTabNavigator(
  {
    MovieStack,
    DiscoverStack,
    FavouritesStack
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#1E2846"
      }
    }
  }
);

export default MainTabNavigator;
