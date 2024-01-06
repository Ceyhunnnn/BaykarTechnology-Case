import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export default function FakeApiCard({user}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>{`@${user.username}`}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <View style={styles.address}>
        <Text>{`${user.address.street}, ${user.address.suite}`}</Text>
        <Text>{`${user.address.city}, ${user.address.zipcode}`}</Text>
      </View>
      <Text style={styles.phone}>{user.phone}</Text>
      <Text style={styles.website}>{user.website}</Text>
      <View style={styles.company}>
        <Text>{user.company.name}</Text>
        <Text>{user.company.catchPhrase}</Text>
        <Text>{user.company.bs}</Text>
      </View>
    </View>
  );
}
