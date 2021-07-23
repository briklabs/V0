import * as React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
 } from 'react-native';

 import Counter from '../components/Counter'

import { View, Text } from '../components/Themed';

export default function TabProfileScreen() {
  return (
    <View style={styles.headerContainer}>
    <ImageBackground
      style={styles.headerBackgroundImage}
      blurRadius={1}
      source={{uri: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg'}}
    >
      <View style={styles.headerColumn}>
          <Image
            style={styles.userImage}
            source={{
              uri: 'https://randomuser.me/api/portraits/women/82.jpg'
            }}
          />
        <Text style={styles.userNameText}>Mika_Climbin</Text>
      </View>
    </ImageBackground>
    <Counter />
  </View>
  );
}

const styles = StyleSheet.create({
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
})