import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading
      onFinish={() => setIsReady(true)}
      onError={err => console.error(err)}
      startAsync={bootstrap}
    />
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
