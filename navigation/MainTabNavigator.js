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
import SearchScreen from "../screens/SearchScreen";
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

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="search" size={24} color={tintColor} />
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
    SearchStack,
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
