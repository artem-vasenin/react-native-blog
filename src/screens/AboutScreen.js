import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import { AppHeadIcon } from '../components/AppHeadIcon';

export const AboutScreen = ({}) => {
  return (
    <View style={styles.canter}>
      <Text>Тестовое приложение для изучения React Native</Text>
      <Text>Версия приложения <Text style={styles.boldText}>v.1.0.0</Text></Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'О приложении',
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
  },
  boldText: {
    fontWeight: 'bold',
  },
});