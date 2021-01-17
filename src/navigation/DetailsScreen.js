import React, { useRef } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default ({ navigation }) => {
  const ref = useRef(null);

  return (
    <WebView
      ref={ref}
      source={{ url: 'https://www.google.com/search?q=react+native+school' }}
      startInLoadingState
      renderLoading={() => (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )}
      allowsBackForwardNavigationGestures
      onNavigationStateChange={(navState) => {
        if (navState.canGoBack) {
          navigation.setParams({
            headerLeftInfo: {
              title: '',
              onPress: () => ref.current.goBack(),
            },
          });
        } else {
          navigation.setParams({
            headerLeftInfo: null,
          });
        }
      }}
    />
  );
};