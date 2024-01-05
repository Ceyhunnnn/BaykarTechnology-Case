import {Text} from 'react-native';
import React from 'react';

export default function FormTitle({title}) {
  return (
    <Text style={{fontWeight: '600', marginHorizontal: 20, marginVertical: 10}}>
      {title}
    </Text>
  );
}
