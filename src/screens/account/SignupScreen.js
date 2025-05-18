import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { BASE_URL } from '@env';

export default function SignupScreen() {
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: `${BASE_URL}/accounts/signup` }} />
      </SafeAreaView>
    );
  } else {
    // For unsupported platforms (e.g., web), render an iframe fallback
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <iframe
          src={`${BASE_URL}/accounts/signup`}
          style={{ flex: 1, width: '100%', height: '100%', border: 'none' }}
          title="WebApp"
        />
      </SafeAreaView>
    );
  }
}