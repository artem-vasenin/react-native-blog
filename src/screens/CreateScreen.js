import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import { AppHeadIcon } from '../components/AppHeadIcon';
import { THEME } from '../theme';
import { addPost } from '../store/actions/post';

export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const img = 'https://tverlife.ru/wp-content/uploads/2019/11/%D0%B1%D0%BE%D0%B9.jpg';

  const createPost = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate('Main');
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss}
      >
        <View style={styles.wrapper}>
            <Text style={styles.title}>Создать Пост</Text>
            <TextInput
              style={styles.textArea}
              placeholder='Введите текст'
              value={text}
              onChangeText={setText}
              multiline
            />
            <Image
              source={{uri: img}}
              style={styles.img}
            />
            <Button
              title='Создать пост'
              color={THEME.COLOR_MAIN}
              onPress={createPost}
            />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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
    wrapper: {
      padding: 10,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      marginVertical: 10,
    },
    textArea: {
      padding: 10,
      marginBottom: 10,
    },
    img: {
      width: '100%',
      height: 200,
      marginBottom: 10,
    }
});