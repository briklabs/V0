/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabSessionsScreen from '../screens/TabSessionsScreen';
import TabLeaderBoardScreen from '../screens/TabLeaderBoardScreen';
import { BottomTabParamList, TabHomeParamList, TabSessionsParamList, TabLeaderBoardParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Sessions"
        component={TabSessionsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-stopwatch" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Leader Board"
        component={TabLeaderBoardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-list" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabSessionsStack = createStackNavigator<TabSessionsParamList>();

function TabSessionsNavigator() {
  return (
    <TabSessionsStack.Navigator>
      <TabSessionsStack.Screen
        name="TabSessionsScreen"
        component={TabSessionsScreen}
        options={{ headerTitle: 'Sessions' }}
      />
    </TabSessionsStack.Navigator>
  );
}

const TabLeaderBoardStack = createStackNavigator<TabLeaderBoardParamList>();

function TabLeaderBoardNavigator() {
  return (
    <TabLeaderBoardStack.Navigator>
      <TabLeaderBoardStack.Screen
        name="TabLeaderBoardScreen"
        component={TabLeaderBoardScreen}
        options={{ headerTitle: 'Leader Board' }}
      />
    </TabLeaderBoardStack.Navigator>
  );
}

const TabLeaderBoardStack = createStackNavigator<TabLeaderBoardParamList>();

function TabLeaderBoardNavigator() {
  return (
    <TabLeaderBoardStack.Navigator>
      <TabLeaderBoardStack.Screen
        name="TabLeaderBoardScreen"
        component={TabLeaderBoardScreen}
        options={{ headerTitle: 'Leader Board' }}
      />
    </TabLeaderBoardStack.Navigator>
  );
}
