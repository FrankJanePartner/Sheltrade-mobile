import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import LoadingScreen from './src/screens/core/LoadingScreen';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <LoadingScreen onFinishLoading={() => setIsReady(true)} />;
  }

  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
