/** импортируем базовый пакет */
import { createAppContainer } from 'react-navigation';
/** ставим доп пакеты */
import { createStackNavigator } from 'react-navigation-stack';
/** импортируем класс для определения платформы */
import { Platform } from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
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

export const AppNavigation = createAppContainer(PostNavigator);