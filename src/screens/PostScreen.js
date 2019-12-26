import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostScreen = ({ navigation }) => {
    const post = navigation.getParam('post');

    return (
        <View style={styles.canter}>
            <Text>PostScreen {post.id}</Text>
        </View>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const post = navigation.getParam('post');

    return {
        headerTitle: `Пост от ${new Date(post.date).toLocaleDateString()}`,
    };
};

const styles = StyleSheet.create({
    canter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});