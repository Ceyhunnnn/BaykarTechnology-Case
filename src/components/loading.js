/* eslint-disable react-native/no-inline-styles */
import {View, ActivityIndicator} from 'react-native';
import React from 'react';

export default function LoadingIndicator() {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator />
    </View>
  );
}
