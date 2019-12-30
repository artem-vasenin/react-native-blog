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

const NavOptions = {
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
};

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: { screen: PostScreen }
}, NavOptions);

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen,
}, NavOptions);

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

const AboutNavigator = createStackNavigator({
    About: AboutScreen,
}, NavOptions);

const CreateNavigator = createStackNavigator({
    Create: CreateScreen,
}, NavOptions);

const MainNavigator = createDrawerNavigator({
    PostTabs: {
        screen: BottomNavigator,
        navigationOptions: {
            drawerLabel: 'Главная',
            drawerIcon: <Ionicons
                name='ios-home'
                size={24}
            />
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            drawerLabel: 'О приложении',
            drawerIcon: <Ionicons
                name='ios-information-circle'
                size={24}
            />
        }
    },
    Create: {
        screen: CreateNavigator,
        navigationOptions: {
            drawerLabel: 'Создать пост',
            drawerIcon: <Ionicons
                name='ios-add-circle'
                size={24}
            />
        }
    },
}, {
    contentOptions: {
        activeTintColor: THEME.COLOR_MAIN,
        labelStyle: {
            fontFamily: 'roboto-bold'
        }
    }
});

export const AppNavigation = createAppContainer(MainNavigator);