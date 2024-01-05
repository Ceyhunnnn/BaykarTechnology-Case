/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

function ErrorText({text}) {
  return <Text style={{color: 'red', textAlign: 'center'}}>{text}</Text>;
}

export default ErrorText;
