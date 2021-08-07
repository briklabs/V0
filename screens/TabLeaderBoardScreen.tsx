import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Alert } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

import { View, Text } from '../components/Themed';

interface BoardItemInterface {
  name: string
  score: number
  iconUrl: string
}

export default function TabLeaderBoardScreen() {
  const [data, setData] = useState(DATA)

  useEffect(() => {
    // simulate new users being added to leaderboard
    setInterval(() => {
      const newData: BoardItemInterface = {
        name: 'Gonna pay firebase!!',
        score: Math.floor(Math.random() * 100),
        iconUrl:
          'https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png'
      };
      setData([...data, newData])
    }, 3000);
  })

  function alert(title: string, body: string): void {
    Alert.alert(title, body, [{ text: 'OK', onPress: () => { } }], {
      cancelable: false
    });
  };

  const props = {
    labelBy: 'name',
    sortBy: 'score',
    data,
    icon: 'iconUrl',
    onRowPress: (item: BoardItemInterface, index: number) => {
      alert(`${item.name} clicked`, `${item.score} points, wow!`)
    },
    evenRowColor: '#edfcf9'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boardTitle}>Leaderboard</Text>
      <View style={styles.board}>
        <Leaderboard {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  board: {
    marginVertical: 20,
  },
  boardTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
});

const DATA: BoardItemInterface[] = [
  {
    name: "Grayson",
    score: 0,
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
