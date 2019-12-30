import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';

import { DATA } from '../mocks';
import { Post } from '../components/Post';
import { AppHeadIcon } from '../components/AppHeadIcon';

export const MainScreen = ({ navigation }) => {
  const OpenPost = post => navigation.navigate('Post', { post });

  return (
    <View style ={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => 
          <Post
            post={item}
            onOpen={OpenPost}
          />}
      />
    </View>
  );
};

MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Блог',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={AppHeadIcon}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeadIcon}>
        <Item
          title='Take photo'
          iconName='ios-camera'
          onPress={() => navigation.push('Create')}
        />
      </HeaderButtons>
    ),
});

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    }
});