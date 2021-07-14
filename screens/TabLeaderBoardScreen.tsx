import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from '../components/Themed';

export default function TabLeaderBoardScreen() {
  return (
    <View style={styles.container}>
      <Text>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
