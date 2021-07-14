import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { BottomTabParamList } from '../types';

export default function TabHomeScreen({ navigation: { navigate } }: StackScreenProps<BottomTabParamList, 'Home'>) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Latest Session</Text>
        <Text>Some session data here.</Text>
        <TouchableOpacity onPress={() => navigate('Sessions')} style={styles.link}>
          <Text style={styles.linkText}>View all sessions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Recommended Workout</Text>
        <Text>Maybe recommend a new workout routine.</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Top Dawg</Text>
        <Text>Show top 3 from the Leader Board</Text>
        <TouchableOpacity onPress={() => navigate('Leader Board')} style={styles.link}>
          <Text style={styles.linkText}>View Leader Board</Text>
        </TouchableOpacity>
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
  link: {
    marginTop: 12,
  },
  linkText: {
    color: '#2e78b7',
  },
});
