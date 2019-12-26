import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BookedScreen = ({}) => {
    return (
        <View style={styles.canter}>
            <Text>BookedScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    canter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});