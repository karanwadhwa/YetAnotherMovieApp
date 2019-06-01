import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "expo";

import MovieScreen from "../screens/MovieScreen";
import MovieListScreen from "../screens/MovieListScreen";
import TVScreen from "../screens/TVScreen";
import TVListScreen from "../screens/TVListScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const MovieStack = createStackNavigator({
  Movies: MovieScreen,
  MovieListScreen
});

MovieStack.navigationOptions = {
  tabBarLabel: "Movies",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="film" size={24} color={tintColor} />
  )
};

const TVStack = createStackNavigator({
  TV: TVScreen,
  TVListScreen
});

TVStack.navigationOptions = {
  tabBarLabel: "TV",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="tv" size={24} color={tintColor} />
  )
};

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen
});

DiscoverStack.navigationOptions = {
  tabBarLabel: "Discover",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="home" size={24} color={tintColor} />
  )
};

const FavouritesStack = createStackNavigator({
  Favourites: FavouritesScreen
});

FavouritesStack.navigationOptions = {
  tabBarLabel: "Favourites",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="home" size={24} color={tintColor} />
  )
};

const MainTabNavigator = createBottomTabNavigator(
  {
    MovieStack,
    TVStack,
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
