/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: 'home',
            },
          },
          TabSessions: {
            screens: {
              TabSessionsScreen: 'Sessions',
            },
          },
          TabLeaderBoard: {
            screens: {
              TabLeaderBoardScreen: 'leader-board',
            },
          },
          TabProfile: {
            screens: {
              TabProfileScreen: 'profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
