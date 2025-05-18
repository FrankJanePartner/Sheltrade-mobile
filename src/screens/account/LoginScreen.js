import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { BASE_URL } from '@env';

export default function LoginScreen() {
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: `${BASE_URL}/accounts/login` }} />
      </SafeAreaView>
    );
  } else {
    // For unsupported platforms (e.g., web), render iframe wrapped in full screen div to cover unwanted content
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', zIndex: 9999 }}>
        <iframe
          src={`${BASE_URL}/accounts/login`}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="WebApp"
        />
      </div>
    );
  }
}
