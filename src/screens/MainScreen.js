import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.canter}>
            <Text>MainScreen</Text>
            <Button
                title='Пост'
                // переход на другой скрин через навигацию
                onPress={() => navigation.navigate('Post')}
            ></Button>
        </View>
    );
};

MainScreen.navigationOptions = {
    /** задаем заголовок в нав.панели */
    headerTitle: 'Блог',
};

const styles = StyleSheet.create({
    canter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});