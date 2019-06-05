import React, { Component } from "react";
import { TouchableOpacity, Linking } from "react-native";
import { View } from "@shoutem/ui";

import FontAwesome from "@expo/vector-icons/FontAwesome";

class ExternalLinks extends Component {
  render() {
    const { imdb, facebook, twitter, instagram, homepage } = this.props;
    return (
      <View styleName="horizontal space-around" style={{ marginVertical: 15 }}>
        {!!imdb && (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https://www.imdb.com/title/${imdb}`)
            }
          >
            <FontAwesome name="imdb" color="#E8B708" size={32} />
          </TouchableOpacity>
        )}

        {!!facebook && (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https://www.facebook.com/${facebook}`)
            }
          >
            <FontAwesome name="facebook-official" color="#4267B2" size={32} />
          </TouchableOpacity>
        )}

        {!!twitter && (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https://www.twitter.com/${twitter}`)
            }
          >
            <FontAwesome name="twitter" color="#00ACED" size={32} />
          </TouchableOpacity>
        )}

        {!!instagram && (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https://www.instagram.com/${instagram}`)
            }
          >
            <FontAwesome name="instagram" color="#FFF" size={32} />
          </TouchableOpacity>
        )}

        {!!homepage && (
          <TouchableOpacity onPress={() => Linking.openURL(homepage)}>
            <FontAwesome name="globe" color="#FFF" size={32} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default ExternalLinks;
