import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "expo";

import MovieScreen from "../screens/MovieScreen";
import MovieListScreen from "../screens/MovieListScreen";
import SelectedMovieScreen from "../screens/SelectedMovieScreen";
import SelectedTVScreen from "../screens/SelectedTVScreen";
import TVScreen from "../screens/TVScreen";
import TVListScreen from "../screens/TVListScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import WatchlistScreen from "../screens/WatchlistScreen";

const MovieStack = createStackNavigator({
  Movies: MovieScreen,
  MovieListScreen,
  SelectedMovieScreen
});

MovieStack.navigationOptions = {
  tabBarLabel: "Movies",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="film" size={24} color={tintColor} />
  )
};

const TVStack = createStackNavigator({
  TV: TVScreen,
  TVListScreen,
  SelectedTVScreen
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

const WatchlistStack = createStackNavigator({
  Watchlist: WatchlistScreen
});

WatchlistStack.navigationOptions = {
  tabBarLabel: "Watchlist",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="bookmark" size={24} color={tintColor} />
  )
};

const MainTabNavigator = createBottomTabNavigator(
  {
    MovieStack,
    TVStack,
    DiscoverStack,
    WatchlistStack
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
