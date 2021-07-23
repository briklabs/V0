import React, { Component } from "react";
import { View, Alert, Text } from "react-native";

import Leaderboard from "react-native-leaderboard";

export default class AvatarAndClickable extends Component {
  state = {
    data: DATA
  };

  componentDidMount() {
    // simulate new users being added to leaderboard
    setInterval(() => {
      const newData = {
        name: "Gonna pay firebase!!",
        score: Math.floor(Math.random() * 100).toString(),
        iconUrl:
          "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
      };
      this.setState({ data: this.state.data.concat(newData) });
    }, 3000);
  }

  alert = (title, body) => {
    Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
      cancelable: false
    });
  };

  render() {
    const props = {
      labelBy: "name",
      sortBy: "score",
      data: this.state.data,
      icon: "iconUrl",
      onRowPress: (item, index) => {
        this.alert(item.name + " clicked", item.score + " points, wow!");
      },
      evenRowColor: "#edfcf9"
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Ghetto Header */}
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "black",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
            Leaderboard
          </Text>
        </View>
        <Leaderboard {...props} />
      </View>
    );
  }
}

const DATA = [
  {
    name: "Grayson",
    score: null,
    iconUrl:
      "https://avatars.githubusercontent.com/u/55790741?s=120&v=4"
  },
  {
    name: "Alex",
    score: 12,
    iconUrl:
      "https://avatars.githubusercontent.com/u/20450617?s=64&v=4"
  },
  {
    name: "Michael",
    score: 244,
    iconUrl: "https://avatars.githubusercontent.com/u/4270658?s=64&v=4"
  },
  {
    name: "Som yong guy",
    score: 0,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-"
  },
];