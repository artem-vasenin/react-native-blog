import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';
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

const BottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons
                    name='ios-albums'
                    size={24}
                    color={info.tintColor}
                />
            ),
            tabBarLabel: 'Посты',
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
            ),
            tabBarLabel: 'Избранное',
        }
    },
};

const BottomNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(BottomTabsConfig, {
        activeTintColor: 'white',
        barStyle: { backgroundColor: THEME.COLOR_MAIN }
    })
    : createBottomTabNavigator(BottomTabsConfig, {
        tabBarOptions: { activeTintColor: THEME.COLOR_MAIN }
    });

const MainMenu = createDrawerNavigator({
    PostTabs: { screen: BottomNavigator },
    About: { screen: AboutScreen },
    Create: { screen: CreateScreen },
});

export const AppNavigation = createAppContainer(MainMenu);