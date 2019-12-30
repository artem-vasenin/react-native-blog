import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { THEME } from '../theme';

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: { screen: PostScreen }
}, {
    /** можно указать осн экран, если не указан то первый */
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        /** задаем параметры для панели навигации */
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ?
                THEME.COLOR_MAIN :
                '#fff'
        },
        headerTintColor: Platform.OS !== 'android' ?
            THEME.COLOR_MAIN :
            '#fff',
    }
});

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ?
                THEME.COLOR_MAIN :
                '#fff'
        },
        headerTintColor: Platform.OS !== 'android' ?
            THEME.COLOR_MAIN :
            '#fff',
    }
});

const BottomNavigator = createBottomTabNavigator({
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons
                    name='ios-albums'
                    size={24}
                    color={info.tintColor}
                />
            )
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons
                    name='ios-star'
                    size={24}
                    color={info.tintColor}
                />
            )
        }
    },
}, {
    tabBarOptions: { activeTintColor: THEME.COLOR_MAIN }
});

export const AppNavigation = createAppContainer(BottomNavigator);