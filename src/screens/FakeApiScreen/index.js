/* eslint-disable react/no-unstable-nested-components */
import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoadingIndicator from './../../components/loading';
import FakeApiCard from '../../components/fakeApiCard';
function FakeApiScreen() {
  const [fakeData, setFakeData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setFakeData(json);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingIndicator />;
  }

  const FakeApiComponent = ({user}) => <FakeApiCard user={user} />;

  return (
    <SafeAreaView>
      <FlatList
        data={fakeData}
        renderItem={({item}) => <FakeApiComponent user={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
export default FakeApiScreen;
