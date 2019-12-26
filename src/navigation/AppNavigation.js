/** импортируем базовый пакет */
import { createAppContainer } from 'react-navigation';
/** ставим доп пакеты */
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
}, {
    /** можно указать осн экран, если не указан то первый */
    initialRouteName: 'Main'
});

export const AppNavigation = createAppContainer(PostNavigator);