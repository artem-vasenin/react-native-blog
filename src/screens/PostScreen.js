import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    Alert,
} from 'react-native';
import { THEME } from '../theme';

export const PostScreen = ({ navigation }) => {
    const post = navigation.getParam('post');

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
                    onPress: () => console.log('OK Pressed'),
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

    return {
        headerTitle: `Пост от ${new Date(post.date).toLocaleDateString()}`,
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