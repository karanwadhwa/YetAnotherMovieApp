import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { AppLoading, Icon } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AppNavigator from "./navigation/AppNavigator";

import store from "./store";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  async componentWillMount() {
    /* await Asset.loadAsync([
      require("./assets/images/not-found-placeholder.gif")
    ]); */
    await Promise.all([
      Asset.fromModule(
        require("./assets/images/not-found-placeholder.gif")
      ).downloadAsync()
    ]);

    await Font.loadAsync({
      "Rubik-Black": require("./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf"),
      "Rubik-BlackItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf"),
      "Rubik-Bold": require("./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf"),
      "Rubik-BoldItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf"),
      "Rubik-Italic": require("./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf"),
      "Rubik-Light": require("./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf"),
      "Rubik-LightItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf"),
      "Rubik-Medium": require("./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf"),
      "Rubik-MediumItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf"),
      "Rubik-Regular": require("./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf"),
      "rubicon-icon-font": require("./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf")
    });

    this.setState({ isLoadingComplete: true });
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

/* import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";

import store from "./store";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
        "nunito-extra-bold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
        "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
        // prettier-ignore
        "Rubik": require("./assets/fonts/Rubik-Regular.ttf"),
        "rubicon-icon-font": require("./assets/fonts/rubicon-icon-font.ttf"),
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      }),
      Asset.loadAsync([require("./assets/images/not-found-placeholder.gif")])
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
 */
