import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostScreen = ({}) => {
    return (
        <View style={styles.canter}>
            <Text>PostScreen</Text>
        </View>
    );
};

PostScreen.navigationOptions = {
    headerTitle: 'Запись блога',
};

const styles = StyleSheet.create({
    canter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});