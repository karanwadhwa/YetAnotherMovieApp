import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "expo";

import HomeScreen from "../screens/HomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather
      name="home"
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

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  DiscoverStack,
  FavouritesStack
});

export default MainTabNavigator;
