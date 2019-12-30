import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import { AppHeadIcon } from '../components/AppHeadIcon';

export const CreateScreen = ({}) => {
    return (
        <View style={styles.canter}>
            <Text>CreateScreen</Text>
        </View>
    );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Создать пост',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={AppHeadIcon}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
});

const styles = StyleSheet.create({
    canter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});