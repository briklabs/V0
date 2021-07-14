import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Latest Session</Text>
        <Text>Some session data here.</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Recommended Workout</Text>
        <Text>Maybe recommend a new workout routine.</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Top Dawg</Text>
        <Text>Show top 3 from the Leader Board</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardContainer: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
