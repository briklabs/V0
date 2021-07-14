import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabSessionsScreen() {
  function handleCreateNewSession() {
    alert('Coming soon')
  }

  return (
    <View style={styles.container}>
      <View style={styles.sessions}>
        {
          [1,2,3,4,5,6].map((dataRow, index) => (
            <View style={styles.sessionRow} key={index}>
              <View>
                <Text>July 14, 2021</Text>
                <Text style={styles.sessionDetail}>Monday</Text>
              </View>
              <View>
                <Text>Bouldering</Text>
                <Text style={styles.sessionDetail}>30 points</Text>
              </View>
              <Text style={styles.sessionDetail}>109:21</Text>
            </View>
          ))
        }
      </View>
      <Button title="Start New Session" onPress={handleCreateNewSession} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  sessions: {
    width: '100%',
    padding: 20,
  },
  sessionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sessionDetail: {
    fontSize: 16,
    fontWeight: '500',
  },
});
