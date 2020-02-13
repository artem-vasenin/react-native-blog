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

export const MainScreen = ({ navigation }) => {
  const OpenPost = post => navigation.navigate('Post', { post });
  // позволяет вызывать экшины меняющие стейт
  const dispatch = useDispatch();

  // Данный хук вызовется тогда, когда весь шаблон готов к работе
  // Ставим в список зависимостей наш dispatch
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  // useSelector позволяет получить доступ к стейту
  // state - весь стейт
  // state.post - ключ нашего участка стейта с постами
  // state.post.posts - объект с постами из редюсера
  const posts = useSelector(state => state.post.posts);

  return (
    <View style ={styles.wrapper}>
      <FlatList
        data={posts}
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