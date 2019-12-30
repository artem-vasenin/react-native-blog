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

export const BookedScreen = ({ navigation }) => {
  const OpenPost = post => navigation.navigate('Post', { post });

  return (
    <View style ={styles.wrapper}>
      <FlatList
        data={DATA.filter(i => i.booked)}
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

BookedScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Избранное',
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
    wrapper: {
        padding: 10,
    }
});