import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
} from 'react-native';
import { DATA } from '../mocks';
import { Post } from '../components/Post';

export const MainScreen = ({ navigation }) => {
    return (
        <View style ={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => <Post post={item}/>}
            />
        </View>
    );
};

MainScreen.navigationOptions = {
    /** задаем заголовок в нав.панели */
    headerTitle: 'Блог',
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    }
});