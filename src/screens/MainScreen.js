import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { DATA } from '../mocks';
import { Post } from '../components/Post';

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

MainScreen.navigationOptions = {
    /** задаем заголовок в нав.панели */
    headerTitle: 'Блог',
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    }
});