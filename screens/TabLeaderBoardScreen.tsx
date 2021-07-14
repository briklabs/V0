import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { View, Text } from '../components/Themed';

export default function TabLeaderBoardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.boardTitle}>Bouldering</Text>
      <View style={styles.board}>
        {
          [1,2,3].map((_, index) => (
            <View style={styles.userRow} key={index}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://randomuser.me/api/portraits/med/men/75.jpg'
                }}
              />
              <Text>Alex</Text>
            </View>
          ))
        }
      </View>
      <Text style={styles.boardTitle}>Top Rope (autobelay)</Text>
      <View style={styles.board}>
        {
          [1,2,3].map((_, index) => (
            <View style={styles.userRow} key={index}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://randomuser.me/api/portraits/med/men/75.jpg'
                }}
              />
              <Text>MR. ROBOT</Text>
            </View>
          ))
        }
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
