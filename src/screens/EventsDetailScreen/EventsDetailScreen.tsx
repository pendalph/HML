import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { TParamList } from './types';

export const EventsDetailScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute<TParamList>()

  const { actor, repo, type, created_at } = route.params;
  
  return (
    <View>
      <Button title='go back' onPress={() => navigation.goBack()}/>
      <Text>{type}</Text>
      <Text>{created_at}</Text>
      <Text>{actor.display_login}</Text>
      <Text>{repo.name}</Text>
    </View>
  )
}