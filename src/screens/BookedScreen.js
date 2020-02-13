import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../components/Post';
import { AppHeadIcon } from '../components/AppHeadIcon';
import { loadPosts } from '../store/actions/post';

export const BookedScreen = ({ navigation }) => {
  const OpenPost = post => navigation.navigate('Post', { post });
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
  
  const bookedPosts = useSelector(state => state.post.bookedPosts);

  return (
    <View style ={styles.wrapper}>
      <FlatList
        data={bookedPosts}
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