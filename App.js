import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading
      onFinish={() => setIsReady(true)}
      onError={err => console.error(err)}
      startAsync={bootstrap}
    />
  }

  return <AppNavigation />;
}
