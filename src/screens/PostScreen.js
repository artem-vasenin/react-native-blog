import React, { useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';

import { THEME } from '../theme';
import { AppHeadIcon } from '../components/AppHeadIcon';
import { toggleBooked, removePost } from '../store/actions/post';

export const PostScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const post = navigation.getParam('post');
    const booked = useSelector(
        state => state.post.bookedPosts
        .some(i => i.id === post.id)
    );

    useEffect(() => {
        navigation.setParams({booked});
    }, [booked]);

    // Используя ф-цию обертку useCallback мы указываем зависимости
    // и передаем ее саму как зависимость в useEffect
    // если так не сделать то при изменении компонента будет цикл
    // а сейчас она дернется единожды. Нихх-я не понял но интересно
    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(post.id));
    }, [dispatch, post]);

    useEffect(() => {
        navigation.setParams({toggleHandler});
    }, [toggleHandler]);

    const RemoveHandler = () => {
        Alert.alert(
            'Прямо удалить совсем пост!',
            'Точно удалить, бро? Ты подумай...',
            [
                {
                    text: 'Не-не, я погорячился..',
                    style: 'cancel',
                },
                {
                    text: 'Нож в печень - никто не вечен',
                    style: 'destructive',
                    onPress: () => {
                        navigation.navigate('Main');
                        dispatch(removePost(post.id));
                    },
                },
            ],
            {cancelable: false},
        );
    };

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: post.img}} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button
                title='Удалить'
                color={THEME.COLOR_DANGER}
                onPress={RemoveHandler}
            />
        </ScrollView>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const post = navigation.getParam('post');
    const toggleHandler = navigation.getParam('toggleHandler');
    const iconName = post.booked ? 'ios-star' : 'ios-star-outline';

    return {
        headerTitle: `Пост от ${new Date(post.date).toLocaleDateString()}`,
        headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeadIcon}>
            <Item
            title='Take photo'
            iconName={iconName}
            onPress={toggleHandler}
            />
        </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'roboto-reg',
    }
});